# Cơ sở dữ liệu và Quy trình Ứng dụng Chat

Tài liệu này mô tả lược đồ cơ sở dữ liệu và các quy trình chính của một ứng dụng chat, bao gồm các bảng, trường, và các chức năng như đăng ký, đăng nhập, quản lý bạn bè, nhắn tin, và quản lý nhóm. Các chuỗi JSON trong nội dung được chuyển thành định dạng JSON dễ đọc với thụt lề.

## Lược đồ Cơ sở dữ liệu

Dưới đây là các bảng được sử dụng trong ứng dụng chat, với đầy đủ các trường, kiểu dữ liệu, và mô tả giá trị.

### 1. account (Tài khoản)

Lưu trữ thông tin tài khoản người dùng.

| Trường         | Mô tả                                  | Type      | Value Description                         |
| ---------------- | ---------------------------------------- | --------- | ----------------------------------------- |
| id               | Định danh duy nhất                    | String    | Ví dụ: UUID hoặc chuỗi duy nhất      |
| user_id          | Định danh người dùng                | String    | Ví dụ: "2704841096"                     |
| password         | Mật khẩu đã mã hóa                 | String    | Mật khẩu được băm (ví dụ: bcrypt) |
| create_time      | Thời gian tạo tài khoản              | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)   |
| change_time      | Thời gian chỉnh sửa gần nhất        | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)   |
| operator_user_id | ID người dùng thực hiện chỉnh sửa | String    | Ví dụ: "2704841096"                     |

### 2. admin (Quản trị viên)

Lưu trữ thông tin tài khoản quản trị viên.

| Trường    | Mô tả                          | Type      | Value Description                                                                                      |
| ----------- | -------------------------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| id          | Định danh duy nhất            | String    | Ví dụ: UUID hoặc chuỗi duy nhất                                                                   |
| account     | Tên tài khoản quản trị      | String    | Ví dụ: "chatAdmin"                                                                                   |
| password    | Mật khẩu đã mã hóa         | String    | Mật khẩu được băm (ví dụ: bcrypt)                                                              |
| face_url    | [Xem chi tiết](./common-fields.md) | String    | Ví dụ: "[http://localhost:10002/object/imAdmin/123.jpg](http://localhost:10002/object/imAdmin/123.jpg)" |
| nickname    | Biệt danh quản trị            | String    | Ví dụ: "Admin Long"                                                                                  |
| user_id     | ID người dùng liên kết      | String    | Ví dụ: "2704841096"                                                                                  |
| level       | Cấp độ quản trị             | Integer   | Ví dụ: 1 (quản trị cấp cao)                                                                       |
| create_time | Thời gian tạo                  | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)                                                                |

### 3. attribute (Thuộc tính)

Lưu trữ thông tin chi tiết của người dùng.

| Trường            | Mô tả                               | Type      | Value Description                                                                                      |
| ------------------- | ------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| id                  | Định danh duy nhất                 | String    | Ví dụ: UUID hoặc chuỗi duy nhất                                                                   |
| user_id             | Định danh người dùng             | String    | Ví dụ: "2704841096"                                                                                  |
| account             | Tên tài khoản                      | String    | Ví dụ: "+84987654321"                                                                                |
| phone_number        | Số điện thoại                     | String    | Ví dụ: "987654321"                                                                                   |
| area_code           | Mã vùng điện thoại               | String    | Ví dụ: "+84"                                                                                         |
| email               | Địa chỉ email                      | String    | Ví dụ: "[user@example.com](mailto:user@example.com)"                                                    |
| nickname            | Biệt danh                            | String    | Ví dụ: "Long"                                                                                        |
| face_url            | [Xem chi tiết](./common-fields.md)      | String    | Ví dụ: "[http://localhost:10002/object/imAdmin/123.jpg](http://localhost:10002/object/imAdmin/123.jpg)" |
| gender              | Giới tính                           | Integer   | Ví dụ: 1 (nam), 2 (nữ), 0 (không xác định)                                                      |
| create_time         | Thời gian tạo                       | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)                                                                |
| change_time         | Thời gian chỉnh sửa gần nhất     | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)                                                                |
| birth_time          | Ngày sinh                            | Timestamp | Ví dụ: 946684800000 (Unix timestamp, 01/01/2000)                                                     |
| level               | Cấp độ người dùng               | Integer   | Ví dụ: 1 (người dùng thường)                                                                    |
| allow_vibration     | Cài đặt thông báo rung           | Boolean   | Ví dụ: true (bật rung)                                                                              |
| allow_beep          | Cài đặt thông báo âm thanh      | Boolean   | Ví dụ: true (bật âm thanh)                                                                         |
| allow_add_friend    | Cho phép gửi yêu cầu kết bạn    | Boolean   | Ví dụ: true (cho phép kết bạn)                                                                    |
| global_recv_msg_opt | Cài đặt nhận tin nhắn toàn cục | Integer   | Ví dụ: 0 (nhận tất cả), 1 (chặn)                                                                 |
| register_type       | Phương thức đăng ký             | String    | Ví dụ: "email", "phone"                                                                              |

### 4. data_version (Phiên bản dữ liệu)

Theo dõi dữ liệu phiên bản cho các khóa.

| Trường | Mô tả                          | Type    | Value Description                         |
| -------- | -------------------------------- | ------- | ----------------------------------------- |
| id       | Định danh duy nhất            | String  | Ví dụ: UUID hoặc chuỗi duy nhất      |
| key      | Khóa phiên bản (ví dụ: seq) | String  | Ví dụ: "seq", "credential"              |
| value    | Giá trị phiên bản            | Integer | Ví dụ: 38 (cho seq), 1 (cho credential) |

### 5. credential (Thông tin xác thực)

Quản lý thông tin xác thực của người dùng.

| Trường     | Mô tả                                     | Type    | Value Description                    |
| ------------ | ------------------------------------------- | ------- | ------------------------------------ |
| id           | Định danh duy nhất                       | String  | Ví dụ: UUID hoặc chuỗi duy nhất |
| user_id      | Định danh người dùng                   | String  | Ví dụ: "2704841096"                |
| account      | Tài khoản (mã vùng + số điện thoại) | String  | Ví dụ: "+84987654321"              |
| type         | Loại thông tin xác thực                 | String  | Ví dụ: "phone", "email"            |
| allow_change | Cho phép thay đổi thông tin xác thực  | Boolean | Ví dụ: true (cho phép thay đổi) |

### 6. register (Đăng ký)

Ghi lại chi tiết đăng ký của người dùng.

| Trường     | Mô tả                          | Type      | Value Description                       |
| ------------ | -------------------------------- | --------- | --------------------------------------- |
| id           | Định danh duy nhất            | String    | Ví dụ: UUID hoặc chuỗi duy nhất    |
| user_id      | Định danh người dùng        | String    | Ví dụ: "2704841096"                   |
| device_id    | Định danh thiết bị           | String    | Ví dụ: "device123"                    |
| ip           | Địa chỉ IP đăng ký         | String    | Ví dụ: "192.168.1.1"                  |
| platform     | [Xem chi tiết](./common-fields.md) | String    | Ví dụ: "iOS", "Android"               |
| account_type | Loại tài khoản                | String    | Ví dụ: "phone", "email"               |
| mode         | Chế độ đăng ký             | String    | Ví dụ: "manual", "auto"               |
| create_time  | Thời gian đăng ký            | Timestamp | Ví dụ: 1747102234028 (Unix timestamp) |

### 7. user (Người dùng)

Lưu trữ thông tin cốt lõi của người dùng.

| Trường            | Mô tả                               | Type      | Value Description                                                                                      |
| ------------------- | ------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| id                  | Định danh duy nhất                 | String    | Ví dụ: UUID hoặc chuỗi duy nhất                                                                   |
| user_id             | Định danh người dùng             | String    | Ví dụ: "2704841096"                                                                                  |
| nickname            | Biệt danh                            | String    | Ví dụ: "Long"                                                                                        |
| face_url            | [Xem chi tiết](./common-fields.md)      | String    | Ví dụ: "[http://localhost:10002/object/imAdmin/123.jpg](http://localhost:10002/object/imAdmin/123.jpg)" |
| ex                  | Thông tin bổ sung                   | String    | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh)                                                      |
| app_manger_level    | Cấp độ quản lý ứng dụng        | Integer   | Ví dụ: 0 (người dùng thường)                                                                    |
| global_recv_msg_opt | Cài đặt nhận tin nhắn toàn cục | Integer   | Ví dụ: 0 (nhận tất cả), 1 (chặn)                                                                 |
| create_time         | Thời gian tạo                       | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)                                                                |

### 8. user_login_record (Lịch sử đăng nhập)

Theo dõi lịch sử đăng nhập của người dùng.

| Trường   | Mô tả                          | Type      | Value Description                       |
| ---------- | -------------------------------- | --------- | --------------------------------------- |
| id         | Định danh duy nhất            | String    | Ví dụ: UUID hoặc chuỗi duy nhất    |
| user_id    | Định danh người dùng        | String    | Ví dụ: "2704841096"                   |
| login_time | Thời gian đăng nhập          | Timestamp | Ví dụ: 1747102234028 (Unix timestamp) |
| ip         | Địa chỉ IP đăng nhập       | String    | Ví dụ: "192.168.1.1"                  |
| device_id  | Định danh thiết bị           | String    | Ví dụ: "device123"                    |
| platform   | [Xem chi tiết](./common-fields.md) | String    | Ví dụ: "iOS", "Android"               |

### 9. conversation_version (Phiên bản hội thoại)

Quản lý nhật ký phiên bản hội thoại.

| Trường    | Mô tả                             | Type      | Value Description                       |
| ----------- | ----------------------------------- | --------- | --------------------------------------- |
| id          | Định danh duy nhất               | String    | Ví dụ: UUID hoặc chuỗi duy nhất    |
| d_id        | Định danh hội thoại             | String    | Ví dụ: "conversation123"              |
| logs        | Nhật ký phiên bản (chuỗi JSON) | JSON      | Ví dụ: {"action": "add_friend"}       |
| version     | Số phiên bản                     | Integer   | Ví dụ: 1                              |
| deleted     | Trạng thái xóa                   | Boolean   | Ví dụ: false (chưa xóa)             |
| last_update | Thời gian cập nhật gần nhất    | Timestamp | Ví dụ: 1747102234028 (Unix timestamp) |

### 10. friend_version (Phiên bản bạn bè)

Quản lý nhật ký phiên bản quan hệ bạn bè.

| Trường    | Mô tả                             | Type      | Value Description                       |
| ----------- | ----------------------------------- | --------- | --------------------------------------- |
| id          | Định danh duy nhất               | String    | Ví dụ: UUID hoặc chuỗi duy nhất    |
| d_id        | Định danh quan hệ bạn bè       | String    | Ví dụ: "friendship123"                |
| logs        | Nhật ký phiên bản (chuỗi JSON) | JSON      | Ví dụ: {"action": "add_friend"}       |
| version     | Số phiên bản                     | Integer   | Ví dụ: 1                              |
| deleted     | Trạng thái xóa                   | Boolean   | Ví dụ: false (chưa xóa)             |
| last_update | Thời gian cập nhật gần nhất    | Timestamp | Ví dụ: 1747102234028 (Unix timestamp) |

### 11. group_join_version (Phiên bản tham gia nhóm)

Quản lý nhật ký phiên bản tham gia nhóm.

| Trường    | Mô tả                             | Type      | Value Description                       |
| ----------- | ----------------------------------- | --------- | --------------------------------------- |
| id          | Định danh duy nhất               | String    | Ví dụ: UUID hoặc chuỗi duy nhất    |
| d_id        | Định danh tham gia nhóm          | String    | Ví dụ: "groupjoin123"                 |
| logs        | Nhật ký phiên bản (chuỗi JSON) | JSON      | Ví dụ: {"action": "join_group"}       |
| version     | Số phiên bản                     | Integer   | Ví dụ: 1                              |
| deleted     | Trạng thái xóa                   | Boolean   | Ví dụ: false (chưa xóa)             |
| last_update | Thời gian cập nhật gần nhất    | Timestamp | Ví dụ: 1747102234028 (Unix timestamp) |

### 12. friend_request (Yêu cầu kết bạn)

Quản lý chi tiết yêu cầu kết bạn.

| Trường       | Mô tả                                       | Type      | Value Description                                 |
| -------------- | --------------------------------------------- | --------- | ------------------------------------------------- |
| id             | Định danh duy nhất                         | String    | Ví dụ: UUID hoặc chuỗi duy nhất              |
| from_user_id   | ID người gửi yêu cầu                     | String    | Ví dụ: "2704841096"                             |
| to_user_id     | ID người nhận yêu cầu                    | String    | Ví dụ: "3074200874"                             |
| handle_result  | Trạng thái yêu cầu (ví dụ: chấp nhận) | String    | Ví dụ: "accepted", "rejected"                   |
| req_msg        | Tin nhắn yêu cầu                           | String    | Ví dụ: "Xin chào, làm bạn nhé!"             |
| create_time    | Thời gian tạo                               | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)           |
| handle_user_id | ID người xử lý yêu cầu                  | String    | Ví dụ: "3074200874"                             |
| handle_msg     | Tin nhắn xử lý                             | String    | Ví dụ: "Đã đồng ý"                         |
| handle_time    | Thời gian xử lý                            | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)           |
| ex             | Thông tin bổ sung                           | String    | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh) |

### 13. friend (Bạn bè)

Lưu trữ quan hệ bạn bè.

| Trường         | Mô tả                                                 | Type      | Value Description                                 |
| ---------------- | ------------------------------------------------------- | --------- | ------------------------------------------------- |
| id               | Định danh duy nhất                                   | String    | Ví dụ: UUID hoặc chuỗi duy nhất              |
| owner_user_id    | ID người sở hữu                                     | String    | Ví dụ: "2704841096"                             |
| friend_user_id   | ID bạn bè                                             | String    | Ví dụ: "3074200874"                             |
| remark           | Ghi chú bạn bè                                       | String    | Ví dụ: "Bạn thân"                             |
| create_time      | Thời gian tạo                                         | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)           |
| add_source       | Nguồn thêm bạn                                       | String    | Ví dụ: "friend_request"                         |
| operator_user_id | ID người khởi tạo quan hệ (người gửi lời mời) | String    | Ví dụ: "2704841096"                             |
| ex               | Thông tin bổ sung                                     | String    | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh) |
| is_pinned        | Trạng thái ghim                                       | Boolean   | Ví dụ: true (ghim bạn bè)                     |

### 14. msg (Tin nhắn)

Lưu trữ chi tiết tin nhắn trong ứng dụng chat. Mỗi bản ghi trong bảng chứa một mảng `msgs`, và mỗi phần tử trong `msgs` bao gồm một đối tượng tin nhắn (`msg`) cùng các thuộc tính liên quan như trạng thái thu hồi (`revoke`), danh sách xóa (`del_list`), và trạng thái đã đọc (`is_read`).

| Trường | Mô tả                                                                | Type   | Value Description                        |
| -------- | ---------------------------------------------------------------------- | ------ | ---------------------------------------- |
| id       | Định danh duy nhất (tương ứng với `_id`trong JSON)            | String | Ví dụ: UUID hoặc chuỗi duy nhất     |
| doc_id   | Định danh tài liệu                                                 | String | Ví dụ: "si_user-2704841096-3074200874" |
| msgs     | Mảng các phần tử tin nhắn, mỗi phần tử chứa các trường con | Array  | Mảng chứa các đối tượng tin nhắn |

#### Phần tử trong `msgs`

Mỗi phần tử trong mảng `msgs` đại diện cho một tin nhắn cụ thể, với cấu trúc như sau:

| Trường | Mô tả                                                    | Type    | Value Description                                         |
| -------- | ---------------------------------------------------------- | ------- | --------------------------------------------------------- |
| msg      | Đối tượng tin nhắn, chứa chi tiết về tin nhắn     | JSON    | Đối tượng chứa chi tiết tin nhắn (xem bên dưới) |
| revoke   | Thông tin thu hồi (null nếu chưa thu hồi)             | JSON    | Ví dụ: null hoặc {"revokerID": "2704841096"}           |
| del_list | Mảng ID người đã xóa tin nhắn                       | Array   | Ví dụ: ["2704841096"]                                   |
| is_read  | Trạng thái đã đọc của phần tử tin nhắn (boolean) | Boolean | Ví dụ: true (đã đọc)                                |

#### Chi tiết `msgs.msg`

Đối tượng `msg` trong mỗi phần tử của `msgs` chứa các trường sau:

| Trường           | Mô tả                                                     | Type    | Value Description                                                                                      |
| ------------------ | ----------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| send_id            | ID người gửi                                             | String  | Ví dụ: "2704841096"                                                                                  |
| recv_id            | ID người nhận                                            | String  | Ví dụ: "3074200874"                                                                                  |
| group_id           | ID nhóm (nếu có, trong trường hợp chat nhóm)         | String  | Ví dụ: "1220940503"                                                                                  |
| client_msg_id      | ID tin nhắn phía client                                   | String  | Ví dụ: "503c1a18d156a3b2cc3e52fecaad1e22"                                                            |
| server_msg_id      | ID tin nhắn phía server                                   | String  | Ví dụ: "478f92e89458afb561442b2afbafdbc3"                                                            |
| sender_platform_id | Nền tảng gửi (ví dụ: 0, 5)                             | Integer | [Xem chi tiết](./common-fields.md)                                                                       |
| sender_nickname    | Biệt danh người gửi                                     | String  | Ví dụ: "Long"                                                                                        |
| sender_face_url    | URL ảnh đại diện người gửi                           | String  | Ví dụ: "[http://localhost:10002/object/imAdmin/123.jpg](http://localhost:10002/object/imAdmin/123.jpg)" |
| session_type       | Loại phiên (ví dụ: đơn, nhóm)                        | String  | [Xem chi tiết](./common-fields.md)                                                                       |
| msg_from           | Nguồn tin nhắn                                            | String  | Ví dụ: "user"                                                                                        |
| content_type       | Loại nội dung (ví dụ: văn bản, hình ảnh)            | Integer | [Xem chi tiết](./msg-content.md)                                                                         |
| content            | Đối tượng nội dung (chuỗi JSON)                       | JSON    | [Xem chi tiết](./msg-content.md)                                                                         |
| seq                | Số thứ tự (số nguyên dài)                             | Long    | Ví dụ: 10                                                                                            |
| send_time          | Thời gian gửi (số nguyên dài)                          | Long    | Ví dụ: 1747100584458                                                                                 |
| create_time        | Thời gian tạo (số nguyên dài)                          | Long    | Ví dụ: 1747100584425                                                                                 |
| status             | Trạng thái tin nhắn                                      | String  | Ví dụ: "sent", "delivered"                                                                           |
| is_read            | Trạng thái đã đọc của tin nhắn (boolean)            | Boolean | Ví dụ: true (đã đọc)                                                                             |
| options            | Tùy chọn tin nhắn (JSON)                                 | JSON    | Ví dụ: {"offlinePush": true, "unreadCount": true}                                                    |
| offline_push       | Cài đặt đẩy ngoại tuyến (JSON)                       | JSON    | Ví dụ: {"title": "New message", "desc": "You have a new message"}                                    |
| at_user_id_list    | Danh sách ID người được đề cập (có thể là null) | Array   | Ví dụ: ["2860551843"], ["AtAllTag"]                                                                  |
| attached_info      | Thông tin đính kèm                                      | String  | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh)                                                      |
| ex                 | Thông tin bổ sung                                         | String  | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh)                                                      |

#### Các trường bổ sung từ tài liệu gốc

Ngoài các trường được liệt kê trong JSON, tài liệu gốc còn bao gồm các trường sau, có thể được lưu trữ ở cấp độ bảng `msg` hoặc liên quan đến các phần tử trong `msgs`:

| Trường        | Mô tả                                                                              | Type    | Value Description                                         |
| --------------- | ------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------- |
| unreadCount     | Số tin nhắn chưa đọc                                                            | Integer | Ví dụ: 5 (số tin nhắn chưa đọc)                    |
| title           | Tiêu đề tin nhắn (cũng xuất hiện trong `offline_push.title`)                | String  | Ví dụ: "Someone applies to add your friend application" |
| desc            | Mô tả tin nhắn (cũng xuất hiện trong `offline_push.desc`)                    | String  | Ví dụ: "Someone applies to add your friend application" |
| ios_push_sound  | Âm thanh đẩy iOS (cũng xuất hiện trong `offline_push.ios_push_sound`)        | String  | Ví dụ: "default"                                        |
| ios_badge_count | Số lượng huy hiệu iOS (cũng xuất hiện trong `offline_push.ios_badge_count`) | Boolean | Ví dụ: false (không tăng huy hiệu)                   |

### 15. conversation (Hội thoại)

Quản lý siêu dữ liệu hội thoại.

| Trường                 | Mô tả                                   | Type      | Value Description                                 |
| ------------------------ | ----------------------------------------- | --------- | ------------------------------------------------- |
| id                       | Định danh duy nhất                     | String    | Ví dụ: UUID hoặc chuỗi duy nhất              |
| owner_user_id            | ID người sở hữu                       | String    | Ví dụ: "2704841096"                             |
| conversation_id          | Định danh hội thoại                   | String    | Ví dụ: "conversation123"                        |
| conversation_type        | Loại hội thoại (ví dụ: đơn, nhóm) | String    | Ví dụ: "single", "group"                        |
| user_id                  | ID người dùng (cho chat đơn)         | String    | Ví dụ: "3074200874"                             |
| group_id                 | ID nhóm (cho chat nhóm)                 | String    | Ví dụ: "1220940503"                             |
| recv_msg_opt             | Tùy chọn nhận tin nhắn                | Integer   | Ví dụ: 0 (nhận tất cả), 1 (chặn)            |
| is_pinned                | Trạng thái ghim                         | Boolean   | Ví dụ: true (ghim hội thoại)                  |
| is_private_chat          | Trạng thái chat riêng tư              | Boolean   | Ví dụ: true (chat riêng tư)                   |
| burn_duration            | Thời gian tự hủy tin nhắn             | Integer   | Ví dụ: 30 (giây)                               |
| group_at_type            | Loại đề cập nhóm                     | String    | Ví dụ: "AtAllTag"                               |
| attached_info            | Thông tin đính kèm                    | String    | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh) |
| ex                       | Thông tin bổ sung                       | String    | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh) |
| max_seq                  | Số thứ tự tối đa                     | Long      | Ví dụ: 100                                      |
| min_seq                  | Số thứ tự tối thiểu                  | Long      | Ví dụ: 1                                        |
| create_time              | Thời gian tạo                           | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)           |
| is_msg_destruct          | Trạng thái tự hủy tin nhắn           | Boolean   | Ví dụ: true (bật tự hủy)                     |
| msg_destruct_time        | Thời gian tự hủy                       | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)           |
| latest_msg_destruct_time | Thời gian tự hủy gần nhất            | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)           |

### 16. group

Bảng `group` lưu trữ thông tin về các nhóm trong ứng dụng chat, bao gồm chi tiết như tên nhóm, thông báo, cài đặt xác minh, và thông tin về người tạo nhóm.

| Field                    | Description                                       | Type      | Value Description                                                                |
| ------------------------ | ------------------------------------------------- | --------- | -------------------------------------------------------------------------------- |
| id                       | Định danh duy nhất (tương ứng với `_id`) | String    | Ví dụ: "6822aa1ad1167980f541c7c4" (ObjectId)                                   |
| group_id                 | ID nhóm                                          | String    | Ví dụ: "1220940503"                                                            |
| group_name               | Tên nhóm                                        | String    | Ví dụ: "grouppp"                                                               |
| notification             | Thông báo nhóm                                 | String    | Ví dụ: "Thông báo 123"                                                       |
| introduction             | Giới thiệu nhóm                                | String    | Ví dụ: "" (chuỗi rỗng nếu không có)                                       |
| face_url                 | URL ảnh đại diện nhóm                        | String    | Ví dụ: "" (chuỗi rỗng hoặc URL ảnh)                                        |
| create_time              | Thời gian tạo nhóm                             | Timestamp | Ví dụ: "2025-05-13T02:10:34.025Z"                                              |
| ex                       | Thông tin bổ sung                               | String    | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh)                                |
| status                   | Trạng thái nhóm                                | Integer   | Ví dụ: 0 (hoạt động), 1 (khóa)                                             |
| creator_user_id          | ID người tạo nhóm                             | String    | Ví dụ: "2704841096"                                                            |
| group_type               | Loại nhóm                                       | Integer   | Ví dụ: 2 (nhóm công khai)                                                    |
| need_verification        | Cài đặt xác minh tham gia nhóm               | Integer   | Ví dụ: 0 (mời không cần duyệt), 1 (cần duyệt), 2 (ai cũng vào được) |
| look_member_info         | Cài đặt xem thông tin thành viên            | Integer   | Ví dụ: 1 (không cho phép), 0 (cho phép)                                     |
| apply_member_friend      | Cài đặt cho phép thêm bạn qua nhóm         | Integer   | Ví dụ: 1 (không cho phép), 0 (cho phép)                                     |
| notification_update_time | Thời gian cập nhật thông báo                 | Timestamp | Ví dụ: "2025-05-13T02:23:12.973Z"                                              |
| notification_user_id     | ID người cập nhật thông báo                 | String    | Ví dụ: "2704841096"                                                            |

### 17. group_member (Thành viên nhóm)

Lưu trữ chi tiết thành viên nhóm.

| Trường         | Mô tả                                        | Type      | Value Description                                                                                      |
| ---------------- | ---------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| id               | Định danh duy nhất                          | String    | Ví dụ: UUID hoặc chuỗi duy nhất                                                                   |
| group_id         | ID nhóm                                       | String    | Ví dụ: "1220940503"                                                                                  |
| user_id          | ID người dùng                               | String    | Ví dụ: "2704841096"                                                                                  |
| nickname         | Biệt danh thành viên                        | String    | Ví dụ: "Long"                                                                                        |
| face_url         | URL ảnh đại diện                           | String    | Ví dụ: "[http://localhost:10002/object/imAdmin/123.jpg](http://localhost:10002/object/imAdmin/123.jpg)" |
| role_level       | Cấp độ vai trò (ví dụ: chủ, quản trị) | Integer   | Ví dụ: 100 (chủ nhóm), 60 (quản trị), 20 (thành viên)                                          |
| join_time        | Thời gian tham gia                            | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)                                                                |
| join_source      | Nguồn tham gia                                | String    | Ví dụ: "invite"                                                                                      |
| inviter_user_id  | ID người mời                                | String    | Ví dụ: "2704841096"                                                                                  |
| operator_user_id | ID người thực hiện thao tác               | String    | Ví dụ: "2704841096"                                                                                  |
| mute_end_time    | Thời gian kết thúc cấm chat                | Timestamp | Ví dụ: 1747102234028 (Unix timestamp)                                                                |
| ex               | Thông tin bổ sung                            | String    | Ví dụ: "" (chuỗi rỗng hoặc JSON tùy chỉnh)                                                      |

### 18. group_member_version (Phiên bản thành viên nhóm)

Quản lý nhật ký phiên bản thành viên nhóm.

| Trường    | Mô tả                             | Type      | Value Description                       |
| ----------- | ----------------------------------- | --------- | --------------------------------------- |
| id          | Định danh duy nhất               | String    | Ví dụ: UUID hoặc chuỗi duy nhất    |
| d_id        | Định danh thành viên nhóm      | String    | Ví dụ: "groupmember123"               |
| logs        | Nhật ký phiên bản (chuỗi JSON) | JSON      | Ví dụ: {"action": "add_member"}       |
| version     | Số phiên bản                     | Integer   | Ví dụ: 26                             |
| deleted     | Trạng thái xóa                   | Boolean   | Ví dụ: false (chưa xóa)             |
| last_update | Thời gian cập nhật gần nhất    | Timestamp | Ví dụ: 1747102234028 (Unix timestamp) |

### 19. seq_user (Trình tự người dùng)

Theo dõi trình tự tin nhắn và trạng thái đã đọc của mỗi người dùng.

| Trường | Mô tả                          | Type   | Value Description                    |
| -------- | -------------------------------- | ------ | ------------------------------------ |
| _id      | Định danh duy nhất            | String | Ví dụ: UUID hoặc chuỗi duy nhất |
| user_id  | ID người dùng                 | String | Ví dụ: "2704841096"                |
| max_seq  | Số thứ tự tối đa            | Long   | Ví dụ: 100                         |
| min_seq  | Sreview tối thiểu              | Long   | Ví dụ: 1                           |
| read_seq | Số lượng tin nhắn đã đọc | Long   | Ví dụ: 50                          |

## Dữ liệu ban đầu

* **Tài khoản quản trị** :
* Tên đăng nhập: `chatAdmin`
* Mật khẩu: `chatAdmin`
* **data_version** :
* `key: seq, value: 38`
* `key: credential, value: 1`
* **Bảng được khởi tạo** : `admin`, `data_version`, `user`

## Quy trình

### 1. Đăng ký

Người dùng có thể đăng ký bằng hai phương thức.

#### a. Tự đăng ký (qua Gmail)

* **Trạng thái** : Chưa được triển khai.
* **Quy trình** : Người dùng đăng ký bằng tài khoản Gmail.

#### b. Đăng ký qua quản trị viên

* **Bảng được cập nhật** :
* `account`: Tạo mục tài khoản mới.
* `attribute`: Lưu chi tiết người dùng.
* `credential`: Lưu thông tin xác thực.
* `register`: Ghi lại chi tiết đăng ký.
* `user`: Tạo hồ sơ người dùng.

### 2. Đăng nhập

Xử lý đăng nhập người dùng và cập nhật nhật ký liên quan.

* **Trạng thái** : Thành công.
* **Bảng được cập nhật** :
* `conversation_version`: Cập nhật nhật ký hội thoại.
* `friend_version`: Cập nhật nhật ký bạn bè.
* `group_join_version`: Cập nhật nhật ký tham gia nhóm.
* `user_login_record`: Ghi lại chi tiết đăng nhập.

### 3. Quản lý bạn bè

Quản lý yêu cầu kết bạn và quan hệ bạn bè.

#### a. Yêu cầu kết bạn

* **Bảng được cập nhật** :
* `friend_request`: Ghi lại chi tiết yêu cầu (người gửi, người nhận, tin nhắn, v.v.).

#### b. Quan hệ bạn bè

* **Bảng được cập nhật** :
* `friend`: Tạo quan hệ bạn bè.
* `friend_version`: Cập nhật nhật ký bạn bè.
* `conversation_version`: Cập nhật nhật ký hội thoại với việc thêm bạn.
  * `d_id`: ID người dùng.
  * `logs`: Ghi lại việc thêm bạn, thêm nhóm.
  * `e_id`: ID tin nhắn (nếu có).

### 4. Nhắn tin

Quản lý việc tạo, lưu trữ và siêu dữ liệu của tin nhắn.

* **Bảng được cập nhật** :
* `msg`: Lưu chi tiết tin nhắn.
  * **Định dạng doc_id** :
  * Chấp nhận kết bạn: `si_user-send_user-recv`
  * Tin nhắn chat: `n_user-send_user-recv`
  * **Ghi chú** :
  * **Chuyển tiếp** : Xử lý như tin nhắn thông thường, tận dụng cơ chế trả lời và (`client_msg_id`, `server_msg_id`).
  * **Chuyển tiếp gộp** : Chọn nhiều tin nhắn và chuyển tiếp như một đơn vị.
  * Tin nhắn không bị xóa vật lý, chỉ cập nhật trạng thái trong cơ sở dữ liệu.
* `conversation`: Tạo hoặc cập nhật siêu dữ liệu hội thoại khi có tin nhắn đầu tiên.
* `conversation_version`: Cập nhật nhật ký hội thoại (logs) dựa trên số lượng hội thoại của người dùng.
* `seq_user`: Cập nhật trình tự đã đọc (`read_seq`).

### 5. Quản lý nhóm

Quản lý việc tạo nhóm, thành viên và nhắn tin.

#### a. Tạo nhóm

* **Bảng được cập nhật** :
* `group`: Tạo nhóm (ngầm định, không được liệt kê rõ ràng).
* `group_member`: Thêm thành viên.
* `group_member_version`: Cập nhật hoặc tạo nhật ký thành viên.
* `msg`: Tạo tin nhắn cho mỗi thành viên.
* `seq`: Tương tự như `msg`.
* `seq_user`: Cập nhật dữ liệu trình tự.
* `conversation_version`: Cập nhật nhật ký hội thoại (logs, version, last_update).

#### b. Chat nhóm

* **Vai trò** :
* **Chủ nhóm** (Owner): Toàn quyền, cao nhất.
  * **Quyền hạn** :
  * Thêm, xóa, cấm chat thành viên.
  * **Xác minh nhóm** (`need_verification`):
    * 2: Ai cũng vào được.
    * 0: Mời không cần duyệt (mặc định).
    * 1: Mời cần duyệt.
  * **Quyền nhóm** :
    * `look_member_info: 1`: Không cho phép xem thông tin thành viên khác.
    * `apply_member_friend: 1`: Không cho phép thêm bạn qua nhóm.
  * Đề cập tất cả (Mention all).
  * **Thông báo nhóm** : Chỉ một thông báo hoạt động, thông báo mới ghi đè thông báo cũ.
    * Cập nhật các trường: `notification_user_id`, `notification`, `notification_update_time`.
    * Thêm vào `msg` với nội dung (xem ví dụ JSON trong tài liệu gốc).
  * Chỉ định quản trị viên: Cập nhật `group_member` với `role_level: 60` (mặc định: 20).
* **Quản trị viên** (Admin): Quyền tương tự chủ nhóm.
* **Người dùng** (User): Chat cơ bản và mention.

## Ghi chú bổ sung

* **Lưu trữ dữ liệu** : Các tệp đa phương tiện (hình ảnh, video, v.v.) được lưu trong MinIO, không bị xóa ngay cả khi tin nhắn bị thu hồi.
* **Giả định** :
* Bảng `group` được ngầm định nhưng không được liệt kê rõ ràng trong tài liệu gốc.
* Một số trường như `notification`, `notification_user_id`, `notification_update_time` được giả định thuộc bảng `group`.
* **JSON Parsing** : Tất cả chuỗi JSON trong tài liệu đã được xác định là chuỗi hợp lệ và được phân tích thành JSON có định dạng đẹp. Nếu có chuỗi không hợp lệ trong thực tế, cần xử lý lỗi khi phân tích.
