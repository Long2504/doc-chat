# Cơ sở dữ liệu và Quy trình Ứng dụng Chat

Tài liệu này mô tả lược đồ cơ sở dữ liệu và các quy trình chính của một ứng dụng chat, bao gồm các bảng, trường, và các chức năng như đăng ký, đăng nhập, quản lý bạn bè, nhắn tin, và quản lý nhóm. Các chuỗi JSON trong nội dung được chuyển thành định dạng JSON dễ đọc với thụt lề.

## Lược đồ Cơ sở dữ liệu

Dưới đây là các bảng được sử dụng trong ứng dụng chat, với đầy đủ các trường và mô tả.

### 1. account (Tài khoản)

Lưu trữ thông tin tài khoản người dùng.

| Trường         | Mô tả                                  |
| ---------------- | ---------------------------------------- |
| id               | Định danh duy nhất                    |
| user_id          | Định danh người dùng                |
| password         | Mật khẩu đã mã hóa                 |
| create_time      | Thời gian tạo tài khoản              |
| change_time      | Thời gian chỉnh sửa gần nhất        |
| operator_user_id | ID người dùng thực hiện chỉnh sửa |

### 2. admin (Quản trị viên)

Lưu trữ thông tin tài khoản quản trị viên.

| Trường    | Mô tả                     |
| ----------- | --------------------------- |
| id          | Định danh duy nhất       |
| account     | Tên tài khoản quản trị |
| password    | Mật khẩu đã mã hóa    |
| face_url    | URL ảnh đại diện        |
| nickname    | Biệt danh quản trị       |
| user_id     | ID người dùng liên kết |
| level       | Cấp độ quản trị        |
| create_time | Thời gian tạo             |

### 3. attribute (Thuộc tính)

Lưu trữ thông tin chi tiết của người dùng.

| Trường            | Mô tả                               |
| ------------------- | ------------------------------------- |
| id                  | Định danh duy nhất                 |
| user_id             | Định danh người dùng             |
| account             | Tên tài khoản                      |
| phone_number        | Số điện thoại                     |
| area_code           | Mã vùng điện thoại               |
| email               | Địa chỉ email                      |
| nickname            | Biệt danh                            |
| face_url            | URL ảnh đại diện                  |
| gender              | Giới tính                           |
| create_time         | Thời gian tạo                       |
| change_time         | Thời gian chỉnh sửa gần nhất     |
| birth_time          | Ngày sinh                            |
| level               | Cấp độ người dùng               |
| allow_vibration     | Cài đặt thông báo rung           |
| allow_beep          | Cài đặt thông báo âm thanh      |
| allow_add_friend    | Cho phép gửi yêu cầu kết bạn    |
| global_recv_msg_opt | Cài đặt nhận tin nhắn toàn cục |
| register_type       | Phương thức đăng ký             |

### 4. data_version (Phiên bản dữ liệu)

Theo dõi dữ liệu phiên bản cho các khóa.

| Trường | Mô tả                          |
| -------- | -------------------------------- |
| id       | Định danh duy nhất            |
| key      | Khóa phiên bản (ví dụ: seq) |
| value    | Giá trị phiên bản            |

### 5. credential (Thông tin xác thực)

Quản lý thông tin xác thực của người dùng.

| Trường     | Mô tả                                     |
| ------------ | ------------------------------------------- |
| id           | Định danh duy nhất                       |
| user_id      | Định danh người dùng                   |
| account      | Tài khoản (mã vùng + số điện thoại) |
| type         | Loại thông tin xác thực                 |
| allow_change | Cho phép thay đổi thông tin xác thực  |

### 6. register (Đăng ký)

Ghi lại chi tiết đăng ký của người dùng.

| Trường     | Mô tả                            |
| ------------ | ---------------------------------- |
| id           | Định danh duy nhất              |
| user_id      | Định danh người dùng          |
| device_id    | Định danh thiết bị             |
| ip           | Địa chỉ IP đăng ký           |
| platform     | Nền tảng (ví dụ: iOS, Android) |
| account_type | Loại tài khoản                  |
| mode         | Chế độ đăng ký               |
| create_time  | Thời gian đăng ký              |

### 7. user (Người dùng)

Lưu trữ thông tin cốt lõi của người dùng.

| Trường            | Mô tả                               |
| ------------------- | ------------------------------------- |
| id                  | Định danh duy nhất                 |
| user_id             | Định danh người dùng             |
| nickname            | Biệt danh                            |
| face_url            | URL ảnh đại diện                  |
| ex                  | Thông tin bổ sung                   |
| app_manger_level    | Cấp độ quản lý ứng dụng        |
| global_recv_msg_opt | Cài đặt nhận tin nhắn toàn cục |
| create_time         | Thời gian tạo                       |

### 8. user_login_record (Lịch sử đăng nhập)

Theo dõi lịch sử đăng nhập của người dùng.

| Trường   | Mô tả                            |
| ---------- | ---------------------------------- |
| id         | Định danh duy nhất              |
| user_id    | Định danh người dùng          |
| login_time | Thời gian đăng nhập            |
| ip         | Địa chỉ IP đăng nhập         |
| device_id  | Định danh thiết bị             |
| platform   | Nền tảng (ví dụ: iOS, Android) |

### 9. conversation_version (Phiên bản hội thoại)

Quản lý nhật ký phiên bản hội thoại.

| Trường    | Mô tả                             |
| ----------- | ----------------------------------- |
| id          | Định danh duy nhất               |
| d_id        | Định danh hội thoại             |
| logs        | Nhật ký phiên bản (chuỗi JSON) |
| version     | Số phiên bản                     |
| deleted     | Trạng thái xóa                   |
| last_update | Thời gian cập nhật gần nhất    |

* **logs (Ví dụ)** :
* **Chuỗi gốc** : `{"detail":"{\"markAsReadUserID\":\"id_user_send\",\"conversationID\":\"si_2704841096_3074200874\",\"seqs\":[1],\"hasReadSeq\":1}"}`
* **JSON đã phân tích** :
  ``json { "detail": { "markAsReadUserID": "id_user_send", "conversationID": "si_2704841096_3074200874", "seqs": [1], "hasReadSeq": 1 } } ``

### 10. friend_version (Phiên bản bạn bè)

Quản lý nhật ký phiên bản quan hệ bạn bè.

| Trường    | Mô tả                             |
| ----------- | ----------------------------------- |
| id          | Định danh duy nhất               |
| d_id        | Định danh quan hệ bạn bè       |
| logs        | Nhật ký phiên bản (chuỗi JSON) |
| version     | Số phiên bản                     |
| deleted     | Trạng thái xóa                   |
| last_update | Thời gian cập nhật gần nhất    |

* **logs** : Tương tự như `conversation_version.logs`, chứa chuỗi JSON mô tả các hành động (ví dụ: thêm bạn).

### 11. group_join_version (Phiên bản tham gia nhóm)

Quản lý nhật ký phiên bản tham gia nhóm.

| Trường    | Mô tả                             |
| ----------- | ----------------------------------- |
| id          | Định danh duy nhất               |
| d_id        | Định danh tham gia nhóm          |
| logs        | Nhật ký phiên bản (chuỗi JSON) |
| version     | Số phiên bản                     |
| deleted     | Trạng thái xóa                   |
| last_update | Thời gian cập nhật gần nhất    |

* **logs** : Tương tự như `conversation_version.logs`, chứa chuỗi JSON mô tả các hành động (ví dụ: tham gia nhóm).

### 12. friend_request (Yêu cầu kết bạn)

Quản lý chi tiết yêu cầu kết bạn.

| Trường       | Mô tả                                       |
| -------------- | --------------------------------------------- |
| id             | Định danh duy nhất                         |
| from_user_id   | ID người gửi yêu cầu                     |
| to_user_id     | ID người nhận yêu cầu                    |
| handle_result  | Trạng thái yêu cầu (ví dụ: chấp nhận) |
| req_msg        | Tin nhắn yêu cầu                           |
| create_time    | Thời gian tạo                               |
| handle_user_id | ID người xử lý yêu cầu                  |
| handle_msg     | Tin nhắn xử lý                             |
| handle_time    | Thời gian xử lý                            |
| ex             | Thông tin bổ sung                           |

### 13. friend (Bạn bè)

Lưu trữ quan hệ bạn bè.

| Trường         | Mô tả                                                 |
| ---------------- | ------------------------------------------------------- |
| id               | Định danh duy nhất                                   |
| owner_user_id    | ID người sở hữu                                     |
| friend_user_id   | ID bạn bè                                             |
| remark           | Ghi chú bạn bè                                       |
| create_time      | Thời gian tạo                                         |
| add_source       | Nguồn thêm bạn                                       |
| operator_user_id | ID người khởi tạo quan hệ (người gửi lời mời) |
| ex               | Thông tin bổ sung                                     |
| is_pinned        | Trạng thái ghim                                       |

### 14. msg (Tin nhắn)

Lưu trữ chi tiết tin nhắn.

| Trường           | Mô tả                                          |
| ------------------ | ------------------------------------------------ |
| id                 | Định danh duy nhất                            |
| doc_id             | Định danh tài liệu                           |
| msgs               | Mảng các tin nhắn                             |
| msg                | Nội dung tin nhắn                              |
| send_id            | ID người gửi                                  |
| recv_id            | ID người nhận                                 |
| group_id           | ID nhóm (nếu có)                              |
| client_msg_id      | ID tin nhắn phía client                        |
| server_msg_id      | ID tin nhắn phía server                        |
| sender_platform_id | Nền tảng gửi                                  |
| sender_nickname    | Biệt danh người gửi                          |
| sender_face_url    | URL ảnh đại diện người gửi                |
| session_type       | Loại phiên (ví dụ: đơn, nhóm)             |
| msg_from           | Nguồn tin nhắn                                 |
| content_type       | Loại nội dung (ví dụ: văn bản, hình ảnh) |
| content            | Đối tượng nội dung (chuỗi JSON)            |
| seq                | Số thứ tự                                     |
| send_time          | Thời gian gửi                                  |
| create_time        | Thời gian tạo                                  |
| status             | Trạng thái tin nhắn                           |
| is_read            | Trạng thái đã đọc                          |
| options            | Tùy chọn tin nhắn                             |
| offlinePush        | Cài đặt đẩy ngoại tuyến                   |
| unreadCount        | Số tin nhắn chưa đọc                        |
| offline_push       | Cài đặt đẩy ngoại tuyến                   |
| title              | Tiêu đề tin nhắn (nếu có)                  |
| desc               | Mô tả tin nhắn                                |
| ex                 | Thông tin bổ sung                              |
| ios_push_sound     | Âm thanh đẩy iOS                              |
| ios_badge_count    | Số lượng huy hiệu iOS                        |
| at_user_id_list    | Danh sách ID người được đề cập          |
| attached_info      | Thông tin đính kèm                           |
| ex                 | Thông tin bổ sung                              |
| revoke             | Trạng thái thu hồi                            |
| del_list           | Mảng ID người đã xóa                       |
| is_read            | Trạng thái đã đọc                          |

* **content (Các ví dụ)** :
* **Văn bản** :
  *  **Chuỗi gốc** : `{"text": "message"}`
  *  **JSON đã phân tích** :
  ```json
  {
    "text": "message"
  }
  ```
* **Trả lời** :
  *  **Chuỗi gốc** :
  ```json
  {"text":"Reply thử 12313","quoteMessage":{"clientMsgID":"db5921264e468d34cb65ebcf399e0b83","serverMsgID":"48d179f2f58ec18c3b53b713e0d3ce44","createTime":1746756998377,"sendTime":1746756998465,"sessionType":1,"sendID":"1222421964","recvID":"8855572844","msgFrom":100,"contentType":101,"senderPlatformID":5,"senderNickname":"Long","senderFaceUrl":"http://localhost:10002/object/imAdmin/123.jpg","seq":5,"isRead":true,"status":2,"textElem":{"content":"https://docs.openim.io/"},"attachedInfoElem":{"groupHasReadInfo":{"hasReadCount":0,"groupMemberCount":4},"isPrivateChat":false,"burnDuration":0,"hasReadTime":0,"isEncryption":false,"inEncryptStatus":false}}}
  ```

    ***JSON đã phân tích** :
      ``json       {         "text": "Reply thử 12313",         "quoteMessage": {           "clientMsgID": "db5921264e468d34cb65ebcf399e0b83",           "serverMsgID": "48d179f2f58ec18c3b53b713e0d3ce44",           "createTime": 1746756998377,           "sendTime": 1746756998465,           "sessionType": 1,           "sendID": "1222421964",           "recvID": "8855572844",           "msgFrom": 100,           "contentType": 101,           "senderPlatformID": 5,           "senderNickname": "Long",           "senderFaceUrl": "http://localhost:10002/object/imAdmin/123.jpg",           "seq": 5,           "isRead": true,           "status": 2,           "textElem": {             "content": "https://docs.openim.io/"           },           "attachedInfoElem": {             "groupHasReadInfo": {               "hasReadCount": 0,               "groupMemberCount": 4             },             "isPrivateChat": false,             "burnDuration": 0,             "hasReadTime": 0,             "isEncryption": false,             "inEncryptStatus": false           }         }       }       ``

* **Tệp** :
  *  **Chuỗi gốc** :
  ```json
  {"filePath":"/Long SA.pdf","uuid":"bb8ee193-1343-4b1a-8462-402e1a0002b2/Long SA.pdf","sourceUrl":"http://localhost:10002/object/9147513913/msg_file_d3c5de1da3b5ff4a07d174d8cc1e587f/Long SA.pdf","fileName":"Long SA.pdf","fileSize":801005,"fileType":"application/pdf"}
  ```

    ***JSON đã phân tích** :
      ``json       {         "filePath": "/Long SA.pdf",         "uuid": "bb8ee193-1343-4b1a-8462-402e1a0002b2/Long SA.pdf",         "sourceUrl": "http://localhost:10002/object/9147513913/msg_file_d3c5de1da3b5ff4a07d174d8cc1e587f/Long SA.pdf",         "fileName": "Long SA.pdf",         "fileSize": 801005,         "fileType": "application/pdf"       }       ``

* **Hình ảnh** :
  *  **Chuỗi gốc** :
  ```json
  {"sourcePath":"/484130918_9315593481810670_3314060385794625929_n.jpg","sourcePicture":{"uuid":"67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg","type":"image/jpeg","size":54076,"width":1440,"height":1218,"url":"http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"},"bigPicture":{"uuid":"67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg","type":"image/jpeg","size":54076,"width":1440,"height":1218,"url":"http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"},"snapshotPicture":{"size":0,"width":640,"height":640,"url":"http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg?height=640\u0026type=image\u0026width=640"}}
  ```

    ***JSON đã phân tích** :
      ``json       {         "sourcePath": "/484130918_9315593481810670_3314060385794625929_n.jpg",         "sourcePicture": {           "uuid": "67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg",           "type": "image/jpeg",           "size": 54076,           "width": 1440,           "height": 1218,           "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"         },         "bigPicture": {           "uuid": "67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg",           "type": "image/jpeg",           "size": 54076,           "width": 1440,           "height": 1218,           "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"         },         "snapshotPicture": {           "size": 0,           "width": 640,           "height": 640,           "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg?height=640&type=image&width=640"         }       }       ``

* **Video** :
  *  **Chuỗi gốc** :
  ```json
  {"videoPath":"/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4","videoUUID":"e3957310-9cb5-43f4-9009-c7f77f8a4426/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4","videoUrl":"http://localhost:10002/object/3074200874/msg_video_8e0d170c884befbdc89ad613b3b72e53.mp4","videoType":"video/mp4","videoSize":1063636,"duration":10,"snapshotPath":"/screenshot1747101712809.png","snapshotUUID":"05d7e078-f284algo-4b22-9d6e-3e51cac259d0/screenshot1747101712809.png","snapshotSize":924771,"snapshotUrl":"http://localhost:10002/object/3074200874/msg_videoSnapshot_8e0d170c884befbdc89ad613b3b72e53.png","snapshotWidth":1080,"snapshotHeight":1922,"snapshotType":"image/png"}
  ```

    ***JSON đã phân tích** :
      ``json       {         "videoPath": "/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4",         "videoUUID": "e3957310-9cb5-43f4-9009-c7f77f8a4426/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4",         "videoUrl": "http://localhost:10002/object/3074200874/msg_video_8e0d170c884befbdc89ad613b3b72e53.mp4",         "videoType": "video/mp4",         "videoSize": 1063636,         "duration": 10,         "snapshotPath": "/screenshot1747101712809.png",         "snapshotUUID": "05d7e078-f284-4b22-9d6e-3e51cac259d0/screenshot1747101712809.png",         "snapshotSize": 924771,         "snapshotUrl": "http://localhost:10002/object/3074200874/msg_videoSnapshot_8e0d170c884befbdc89ad613b3b72e53.png",         "snapshotWidth": 1080,         "snapshotHeight": 1922,         "snapshotType": "image/png"       }       ``

* **Danh thiếp** :
  *  **Chuỗi gốc** :
  ```json
  {"userID":"7593851288","nickname":"Long 2","faceURL":"http://localhost:10002/object/imAdmin/484109191_9315593635143988_1278238173161972690_n.jpg","ex":""}
  ```

    ***JSON đã phân tích** :
      ``json       {         "userID": "7593851288",         "nickname": "Long 2",         "faceURL": "http://localhost:10002/object/imAdmin/484109191_9315593635143988_1278238173161972690_n.jpg",         "ex": ""       }       ``

* **Chuyển tiếp gộp** :
  *  **Chuỗi gốc** :
  ```json
  {"title":"Chat History for Long and Long 1 ","abstractList":["Long 1：1","Long：đâyyyyyyy","Long 1：[Image]","Long 1：[Video]"],"multiMessage":[{"clientMsgID":"503c1a18d156a3b2cc3e52fecaad1e22","serverMsgID":"478f92e89458afb561442b2afbafdbc3","createTime":1747100584425,"sendTime":1747100584458,"sessionType":1,"sendID":"3074200874","recvID":"2704841096","msgFrom":100,"contentType":101,"senderPlatformID":5,"senderNickname":"Long 1","senderFaceUrl":"http://localhost:10002/object/imAdmin/xinhhh.jpg","seq":10,"isRead":true,"status":2,"textElem":{"content":"1"},"attachedInfoElem":{"groupHasReadInfo":{"hasReadCount":0,"groupMemberCount":0},"isPrivateChat":false,"burnDuration":0,"hasReadTime":0,"isEncryption":false,"inEncryptStatus":false}},{"clientMsgID":"7eba456ac77c78bbf99075c97586d943","serverMsgID":"cafba6dd16c44d0c7c2455e38e5443b9","createTime":1747100948045,"sendTime":1747100948067,"sessionType":1,"sendID":"2704841096","recvID":"3074200874","msgFrom":100,"contentType":114,"senderPlatformID":5,"senderNickname":"Long","senderFaceUrl":"http://localhost:10002/object/imAdmin/123.jpg","seq":14,"isRead":true,"status":2,"quoteElem":{"text":"đâyyyyyyy","quoteMessage":{"clientMsgID":"c75ab0647c9360d342bf6479b8e155d9","serverMsgID":"939a3ff08782836e8a8018d673fc4bbc","createTime":1747100942227,"sendTime":1747100942273,"sessionType":1,"sendID":"3074200874","recvID":"2704841096","msgFrom":100,"contentType":2101,"senderPlatformID":5,"senderNickname":"Long 1","senderFaceUrl":"http://localhost:10002/object/imAdmin/xinhhh.jpg","content":"{\"revokerID\":\"3074200874\",\"revokerRole\":0,\"clientMsgID\":\"c75ab0647c9360d342bf6479b8e155d9\",\"revokerNickname\":\"Long 1\",\"revokeTime\":1747100955248,\"sourceMessageSendTime\":1747100942273,\"sourceMessageSendID\":\"3074200874\",\"sourceMessageSenderNickname\":\"Long 1\",\"sessionType\":1,\"seq\":13,\"ex\":\"\",\"isAdminRevoke\":false}","seq":13,"isRead":true,"status":2,"attachedInfo":"null","textElem":{"content":"longggg"},"attachedInfoElem":{"groupHasReadInfo":{"hasReadCount":0,"groupMemberCount":0},"isPrivateChat":false,"burnDuration":0,"hasReadTime":1747100950153,"isEncryption":false,"inEncryptStatus":false}}},"attachedInfoElem":{"groupHasReadInfo":{"hasReadCount":0,"groupMemberCount":0},"isPrivateChat":false,"burnDuration":0,"hasReadTime":1747100950153,"isEncryption":false,"inEncryptStatus":false}},{"clientMsgID":"518cc0cf63ed4c22c5dfbe626f7a9425","serverMsgID":"106b01a03a9ce2a9bd18a0a1b047ef81","createTime":1747101612178,"sendTime":1747101612331,"sessionType":1,"sendID":"3074200874","recvID":"2704841096","msgFrom":100,"contentType":102,"senderPlatformID":5,"senderNickname":"Long 1","senderFaceUrl":"http://localhost:10002/object/imAdmin/xinhhh.jpg","seq":17,"isRead":true,"status":2,"pictureElem":{"sourcePath":"/484130918_9315593481810670_3314060385794625929_n.jpg","sourcePicture":{"uuid":"67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg","type":"image/jpeg","size":54076,"width":1440,"height":1218,"url":"http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"},"bigPicture":{"uuid":"67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg","type":"image/jpeg","size":54076,"width":1440,"height":1218,"url":"http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"},"snapshotPicture":{"size":0,"width":640,"height":640,"url":"http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg?height=640\u0026type=image\u0026width=640"}},"attachedInfoElem":{"groupHasReadInfo":{"hasReadCount":0,"groupMemberCount":0},"isPrivateChat":false,"burnDuration":0,"hasReadTime":0,"isEncryption":false,"inEncryptStatus":false}},{"clientMsgID":"8e0d170c884befbdc89ad613b3b72e53","serverMsgID":"79e343ad69db17803a5997b3dccef149","createTime":1747101712831,"sendTime":1747101713547,"sessionType":1,"sendID":"3074200874","recvID":"2704841096","msgFrom":100,"contentType":104,"senderPlatformID":5,"senderNickname":"Long 1","senderFaceUrl":"http://localhost:10002/object/imAdmin/xinhhh.jpg","seq":18,"isRead":true,"status":2,"videoElem":{"videoPath":"/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4","videoUUID":"e3957310-9cb5-43f4-9009-c7f77f8a4426/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4","videoUrl":"http://localhost:10002/object/3074200874/msg_video_8e0d170c884befbdc89ad613b3b72e53.mp4","videoType":"video/mp4","videoSize":1063636,"duration":10,"snapshotPath":"/screenshot1747101712809.png","snapshotUUID":"05d7e078-f284-4b22-9d6e-3e51cac259d0/screenshot1747101712809.png","snapshotSize":924771,"snapshotUrl":"http://localhost:10002/object/3074200874/msg_videoSnapshot_8e0d170c884befbdc89ad613b3b72e53.png","snapshotWidth":1080,"snapshotHeight":1922,"snapshotType":"image/png"},"attachedInfoElem":{"groupHasReadInfo":{"hasReadCount":0,"groupMemberCount":0},"isPrivateChat":false,"burnDuration":0,"hasReadTime":0,"isEncryption":false,"inEncryptStatus":false}},{"clientMsgID":"c99f4eb3582b9d2f23cddb9267d41e19","serverMsgID":"d9f9488895d1eb676de8c72c2b0b01a8","createTime":1747101765634,"sendTime":1747101765659,"sessionType":1,"sendID":"3074200874","recvID":"2704841096","msgFrom":100,"contentType":108,"senderPlatformID":5,"senderNickname":"Long 1","senderFaceUrl":"http://localhost:10002/object/imAdmin/xinhhh.jpg","seq":19,"isRead":true,"status":2,"cardElem":{"userID":"7593851288","nickname":"Long 2","faceURL":"http://localhost:10002/object/imAdmin/484109191_9315593635143988_1278238173161972690_n.jpg","ex":""},"attachedInfoElem":{"groupHasReadInfo":{"hasReadCount":0,"groupMemberCount":0},"isPrivateChat":false,"burnDuration":0,"hasReadTime":0,"isEncryption":false,"inEncryptStatus":false}}]}
  ```

    ***JSON đã phân tích** :
      ``json       {         "title": "Chat History for Long and Long 1",         "abstractList": [           "Long 1：1",           "Long：đâyyyyyyy",           "Long 1：[Image]",           "Long 1：[Video]"         ],         "multiMessage": [           {             "clientMsgID": "503c1a18d156a3b2cc3e52fecaad1e22",             "serverMsgID": "478f92e89458afb561442b2afbafdbc3",             "createTime": 1747100584425,             "sendTime": 1747100584458,             "sessionType": 1,             "sendID": "3074200874",             "recvID": "2704841096",             "msgFrom": 100,             "contentType": 101,             "senderPlatformID": 5,             "senderNickname": "Long 1",             "senderFaceUrl": "http://localhost:10002/object/imAdmin/xinhhh.jpg",             "seq": 10,             "isRead": true,             "status": 2,             "textElem": {               "content": "1"             },             "attachedInfoElem": {               "groupHasReadInfo": {                 "hasReadCount": 0,                 "groupMemberCount": 0               },               "isPrivateChat": false,               "burnDuration": 0,               "hasReadTime": 0,               "isEncryption": false,               "inEncryptStatus": false             }           },           {             "clientMsgID": "7eba456ac77c78bbf99075c97586d943",             "serverMsgID": "cafba6dd16c44d0c7c2455e38e5443b9",             "createTime": 1747100948045,             "sendTime": 1747100948067,             "sessionType": 1,             "sendID": "2704841096",             "recvID": "3074200874",             "msgFrom": 100,             "contentType": 114,             "senderPlatformID": 5,             "senderNickname": "Long",             "senderFaceUrl": "http://localhost:10002/object/imAdmin/123.jpg",             "seq": 14,             "isRead": true,             "status": 2,             "quoteElem": {               "text": "đâyyyyyyy",               "quoteMessage": {                 "clientMsgID": "c75ab0647c9360d342bf6479b8e155d9",                 "serverMsgID": "939a3ff08782836e8a8018d673fc4bbc",                 "createTime": 1747100942227,                 "sendTime": 1747100942273,                 "sessionType": 1,                 "sendID": "3074200874",                 "recvID": "2704841096",                 "msgFrom": 100,                 "contentType": 2101,                 "senderPlatformID": 5,                 "senderNickname": "Long 1",                 "senderFaceUrl": "http://localhost:10002/object/imAdmin/xinhhh.jpg",                 "content": {                   "revokerID": "3074200874",                   "revokerRole": 0,                   "clientMsgID": "c75ab0647c9360d342bf6479b8e155d9",                   "revokerNickname": "Long 1",                   "revokeTime": 1747100955248,                   "sourceMessageSendTime": 1747100942273,                   "sourceMessageSendID": "3074200874",                   "sourceMessageSenderNickname": "Long 1",                   "sessionType": 1,                   "seq": 13,                   "ex": "",                   "isAdminRevoke": false                 },                 "seq": 13,                 "isRead": true,                 "status": 2,                 "attachedInfo": null,                 "textElem": {                   "content": "longggg"                 },                 "attachedInfoElem": {                   "groupHasReadInfo": {                     "hasReadCount": 0,                     "groupMemberCount": 0                   },                   "isPrivateChat": false,                   "burnDuration": 0,                   "hasReadTime": 1747100950153,                   "isEncryption": false,                   "inEncryptStatus": false                 }               }             },             "attachedInfoElem": {               "groupHasReadInfo": {                 "hasReadCount": 0,                 "groupMemberCount": 0               },               "isPrivateChat": false,               "burnDuration": 0,               "hasReadTime": 1747100950153,               "isEncryption": false,               "inEncryptStatus": false             }           },           {             "clientMsgID": "518cc0cf63ed4c22c5dfbe626f7a9425",             "serverMsgID": "106b01a03a9ce2a9bd18a0a1b047ef81",             "createTime": 1747101612178,             "sendTime": 1747101612331,             "sessionType": 1,             "sendID": "3074200874",             "recvID": "2704841096",             "msgFrom": 100,             "contentType": 102,             "senderPlatformID": 5,             "senderNickname": "Long 1",             "senderFaceUrl": "http://localhost:10002/object/imAdmin/xinhhh.jpg",             "seq": 17,             "isRead": true,             "status": 2,             "pictureElem": {               "sourcePath": "/484130918_9315593481810670_3314060385794625929_n.jpg",               "sourcePicture": {                 "uuid": "67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg",                 "type": "image/jpeg",                 "size": 54076,                 "width": 1440,                 "height": 1218,                 "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"               },               "bigPicture": {                 "uuid": "67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg",                 "type": "image/jpeg",                 "size": 54076,                 "width": 1440,                 "height": 1218,                 "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"               },               "snapshotPicture": {                 "size": 0,                 "width": 640,                 "height": 640,                 "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg?height=640&type=image&width=640"               }             },             "attachedInfoElem": {               "groupHasReadInfo": {                 "hasReadCount": 0,                 "groupMemberCount": 0               },               "isPrivateChat": false,               "burnDuration": 0,               "hasReadTime": 0,               "isEncryption": false,               "inEncryptStatus": false             }           },           {             "clientMsgID": "8e0d170c884befbdc89ad613b3b72e53",             "serverMsgID": "79e343ad69db17803a5997b3dccef149",             "createTime": 1747101712831,             "sendTime": 1747101713547,             "sessionType": 1,             "sendID": "3074200874",             "recvID": "2704841096",             "msgFrom": 100,             "contentType": 104,             "senderPlatformID": 5,             "senderNickname": "Long 1",             "senderFaceUrl": "http://localhost:10002/object/imAdmin/xinhhh.jpg",             "seq": 18,             "isRead": true,             "status": 2,             "videoElem": {               "videoPath": "/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4",               "videoUUID": "e3957310-9cb5-43f4-9009-c7f77f8a4426/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4",               "videoUrl": "http://localhost:10002/object/3074200874/msg_video_8e0d170c884befbdc89ad613b3b72e53.mp4",               "videoType": "video/mp4",               "videoSize": 1063636,               "duration": 10,               "snapshotPath": "/screenshot1747101712809.png",               "snapshotUUID": "05d7e078-f284-4b22-9d6e-3e51cac259d0/screenshot1747101712809.png",               "snapshotSize": 924771,               "snapshotUrl": "http://localhost:10002/object/3074200874/msg_videoSnapshot_8e0d170c884befbdc89ad613b3b72e53.png",               "snapshotWidth": 1080,               "snapshotHeight": 1922,               "snapshotType": "image/png"             },             "attachedInfoElem": {               "groupHasReadInfo": {                 "hasReadCount": 0,                 "groupMemberCount": 0               },               "isPrivateChat": false,               "burnDuration": 0,               "hasReadTime": 0,               "isEncryption": false,               "inEncryptStatus": false             }           },           {             "clientMsgID": "c99f4eb3582b9d2f23cddb9267d41e19",             "serverMsgID": "d9f9488895d1eb676de8c72c2b0b01a8",             "createTime": 1747101765634,             "sendTime": 1747101765659,             "sessionType": 1,             "sendID": "3074200874",             "recvID": "2704841096",             "msgFrom": 100,             "contentType": 108,             "senderPlatformID": 5,             "senderNickname": "Long 1",             "senderFaceUrl": "http://localhost:10002/object/imAdmin/xinhhh.jpg",             "seq": 19,             "isRead": true,             "status": 2,             "cardElem": {               "userID": "7593851288",               "nickname": "Long 2",               "faceURL": "http://localhost:10002/object/imAdmin/484109191_9315593635143988_1278238173161972690_n.jpg",               "ex": ""             },             "attachedInfoElem": {               "groupHasReadInfo": {                 "hasReadCount": 0,                 "groupMemberCount": 0               },               "isPrivateChat": false,               "burnDuration": 0,               "hasReadTime": 0,               "isEncryption": false,               "inEncryptStatus": false             }           }         ]       }       ``

* **del_list** : Mảng ID người đã xóa tin nhắn, chỉ xóa bên phía người xóa.
* **revoke** : Người gửi thu hồi tin nhắn, áp dụng cho tất cả. Tin nhắn được cập nhật trạng thái trong cơ sở dữ liệu, dữ liệu (hình ảnh, video, v.v.) vẫn được lưu trong MinIO.

### 15. conversation (Hội thoại)

Quản lý siêu dữ liệu hội thoại.

| Trường                 | Mô tả                                   |
| ------------------------ | ----------------------------------------- |
| id                       | Định danh duy nhất                     |
| owner_user_id            | ID người sở hữu                       |
| conversation_id          | Định danh hội thoại                   |
| conversation_type        | Loại hội thoại (ví dụ: đơn, nhóm) |
| user_id                  | ID người dùng (cho chat đơn)         |
| group_id                 | ID nhóm (cho chat nhóm)                 |
| recv_msg_opt             | Tùy chọn nhận tin nhắn                |
| is_pinned                | Trạng thái ghim                         |
| is_private_chat          | Trạng thái chat riêng tư              |
| burn_duration            | Thời gian tự hủy tin nhắn             |
| group_at_type            | Loại đề cập nhóm                     |
| attached_info            | Thông tin đính kèm                    |
| ex                       | Thông tin bổ sung                       |
| max_seq                  | Số thứ tự tối đa                     |
| min_seq                  | Số thứ tự tối thiểu                  |
| create_time              | Thời gian tạo                           |
| is_msg_destruct          | Trạng thái tự hủy tin nhắn           |
| msg_destruct_time        | Thời gian tự hủy                       |
| latest_msg_destruct_time | Thời gian tự hủy gần nhất            |

### 16. group_member (Thành viên nhóm)

Lưu trữ chi tiết thành viên nhóm.

| Trường         | Mô tả                                        |
| ---------------- | ---------------------------------------------- |
| id               | Định danh duy nhất                          |
| group_id         | ID nhóm                                       |
| user_id          | ID người dùng                               |
| nickname         | Biệt danh thành viên                        |
| face_url         | URL ảnh đại diện                           |
| role_level       | Cấp độ vai trò (ví dụ: chủ, quản trị) |
| join_time        | Thời gian tham gia                            |
| join_source      | Nguồn tham gia                                |
| inviter_user_id  | ID người mời                                |
| operator_user_id | ID người thực hiện thao tác               |
| mute_end_time    | Thời gian kết thúc cấm chat                |
| ex               | Thông tin bổ sung                            |

### 17. group_member_version (Phiên bản thành viên nhóm)

Quản lý nhật ký phiên bản thành viên nhóm.

| Trường    | Mô tả                             |
| ----------- | ----------------------------------- |
| id          | Định danh duy nhất               |
| d_id        | Định danh thành viên nhóm      |
| logs        | Nhật ký phiên bản (chuỗi JSON) |
| version     | Số phiên bản                     |
| deleted     | Trạng thái xóa                   |
| last_update | Thời gian cập nhật gần nhất    |

### 18. seq_user (Trình tự người dùng)

Theo dõi trình tự tin nhắn và trạng thái đã đọc của mỗi người dùng.

| Trường | Mô tả                          |
| -------- | -------------------------------- |
| _id      | Định danh duy nhất            |
| user_id  | ID người dùng                 |
| max_seq  | Số thứ tự tối đa            |
| min_seq  | Số thứ tự tối thiểu         |
| read_seq | Số lượng tin nhắn đã đọc |

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
    * Thêm vào `msg` với nội dung:

    * **Chuỗi gốc** :

    ```json
    {"detail":"{\"opUser\":{\"groupID\":\"1220940503\",\"userID\":\"2704841096\",\"roleLevel\":100,\"joinTime\":1747102234028,\"nickname\":\"Long\",\"faceURL\":\"http://localhost:10002/object/imAdmin/123.jpg\",\"appMangerLevel\":0,\"joinSource\":2,\"operatorUserID\":\"2704841096\",\"ex\":\"\",\"muteEndTime\":0,\"inviterUserID\":\"2704841096\"},\"group\":{\"groupID\":\"1220940503\",\"groupName\":\"grouppp\",\"notification\":\"Thông báo 123\",\"introduction\":\"\",\"faceURL\":\"\",\"ownerUserID\":\"2704841096\",\"createTime\":1747102234025,\"memberCount\":4,\"ex\":\"\",\"status\":0,\"creatorUserID\":\"2704841096\",\"groupType\":2,\"needVerification\":0,\"lookMemberInfo\":1,\"applyMemberFriend\":1,\"notificationUpdateTime\":1747102992973,\"notificationUserID\":\"2704841096\"},\"groupMemberVersion\":26,\"groupMemberVersionID\":\"6822aa1ad1167980f541c7c8\"}"}
    ```

    * **JSON đã phân tích** :

    ```json
    {
      "detail": {
        "opUser": {
          "groupID": "1220940503",
          "userID": "2704841096",
          "roleLevel": 100,
          "joinTime": 1747102234028,
          "nickname": "Long",
          "faceURL": "http://localhost:10002/object/imAdmin/123.jpg",
          "appMangerLevel": 0,
          "joinSource": 2,
          "operatorUserID": "2704841096",
          "ex": "",
          "muteEndTime": 0,
          "inviterUserID": "2704841096"
        },
        "group": {
          "groupID": "1220940503",
          "groupName": "grouppp",
          "notification": "Thông báo 123",
          "introduction": "",
          "faceURL": "",
          "ownerUserID": "2704841096",
          "createTime": 1747102234025,
          "memberCount": 4,
          "ex": "",
          "status": 0,
          "creatorUserID": "2704841096",
          "groupType": 2,
          "needVerification": 0,
          "lookMemberInfo": 1,
          "applyMemberFriend": 1,
          "notificationUpdateTime": 1747102992973,
          "notificationUserID": "2704841096"
        },
        "groupMemberVersion": 26,
        "groupMemberVersionID": "6822aa1ad1167980f541c7c8"
      }
    }
    ```
  * Chỉ định quản trị viên: Cập nhật `group_member` với `role_level: 60` (mặc định: 20).
* **Quản trị viên** (Admin): Quyền tương tự chủ nhóm.
* **Người dùng** (User): Chat cơ bản và đề cập.
* **Đề cập** :
* **Một người** :
  *  **Chuỗi gốc** :
  ```json
  {"text":"@2860551843 1234","atUserList":["2860551843"],"atUsersInfo":[{"atUserID":"2860551843","groupNickname":"Long 2"}],"isAtSelf":false}
  ```

    ***JSON đã phân tích** :
      ``json       {         "text": "@2860551843 1234",         "atUserList": ["2860551843"],         "atUsersInfo": [           {             "atUserID": "2860551843",             "groupNickname": "Long 2"           }         ],         "isAtSelf": false       }       ``
    * `at_user_id_list`: `2860551843`

* **Mọi người** :
  *  **Chuỗi gốc** :
  ```json
  {"text":"@AtAllTag alo 12123","atUserList":["AtAllTag"],"atUsersInfo":[{"atUserID":"AtAllTag","groupNickname":"Everyone"}],"isAtSelf":false}
  ```

    ***JSON đã phân tích** :
      ``json       {         "text": "@AtAllTag alo 12123",         "atUserList": ["AtAllTag"],         "atUsersInfo": [           {             "atUserID": "AtAllTag",             "groupNickname": "Everyone"           }         ],         "isAtSelf": false       }       ``
    * `at_user_id_list`: `["AtAllTag"]`

## Ghi chú bổ sung

* **Lưu trữ dữ liệu** : Các tệp đa phương tiện (hình ảnh, video, v.v.) được lưu trong MinIO, không bị xóa ngay cả khi tin nhắn bị thu hồi.
* **Giả định** :
* Bảng `group` được ngầm định nhưng không được liệt kê rõ ràng trong tài liệu gốc.
* Một số trường như `notification`, `notification_user_id`, `notification_update_time` được giả định thuộc bảng `group`.
* **JSON Parsing** : Tất cả chuỗi JSON trong tài liệu đã được xác định là chuỗi hợp lệ và được phân tích thành JSON có định dạng đẹp. Nếu có chuỗi không hợp lệ trong thực tế, cần xử lý lỗi khi phân tích.
