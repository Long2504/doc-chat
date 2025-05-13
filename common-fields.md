# Mô Tả Các Trường Chung - OpenIM

Dưới đây là mô tả các trường chung và các đối tượng được sử dụng trong API của OpenIM, bao gồm thông tin người dùng, bạn bè, nhóm, thành viên nhóm, yêu cầu kết bạn, yêu cầu tham gia nhóm, hình ảnh, và thông tin cuộc trò chuyện.

## Các Trường Chung

| Tên Trường  | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                                                                                                                               | Giá Trị Mô Tả                                                                                            |
| -------------- | --------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| secret         | string          | 32                          | Bí mật của OpenIM, trường secret từ tệp cấu hình phía máy chủ share.yml                                                   | Chuỗi                                                                                                       |
| platformID     | int             |                             | Loại thiết bị khi người dùng đăng nhập                                                                                       | 1: iOS, 2: Android, 3: Windows, 4: OSX, 5: WEB, 6: Mini Program, 7: Linux, 8: AndroidPad, 9: IPad, 10: Admin |
| userID         | string          | 64                          | ID người dùng, phải duy nhất trong hệ thống IM                                                                                 | Chuỗi                                                                                                       |
| nickname       | string          | 255                         | Biệt danh                                                                                                                            | Chuỗi                                                                                                       |
| faceURL        | string          | 255                         | URL ảnh đại diện                                                                                                                  | URL                                                                                                          |
| ex             | string          | 1024                        | Trường mở rộng, khuyến nghị đóng gói dưới dạng chuỗi JSON                                                                | Chuỗi/JSON                                                                                                  |
| operationID    | string          |                             | ID thao tác, dùng để theo dõi vấn đề, phải duy nhất, đề xuất sử dụng timestamp hiện tại, số ngẫu nhiên và userID | Chuỗi                                                                                                       |
| operatorUserID | string          | 64                          | Người thực hiện thao tác, ý nghĩa cụ thể phụ thuộc vào ngữ cảnh                                                         | Chuỗi                                                                                                       |
| groupID        | string          | 64                          | ID nhóm, phải duy nhất trong hệ thống IM                                                                                         | Chuỗi                                                                                                       |
| sessionType    | int             |                             | Loại phiên trò chuyện                                                                                                             | 1: Trò chuyện đơn, 3: Trò chuyện nhóm, 4: Thông báo hệ thống                                      |

## Đối Tượng Thông Tin Người Dùng Công Khai (PublicUserInfo)

Đối tượng này chứa thông tin công khai của người dùng, thường dùng để hiển thị thông tin cơ bản.

| Tên Trường | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả              |
| ------------- | --------------- | --------------------------- | -------------------- |
| userID        | string          | 64                          | ID người dùng     |
| nickname      | string          | 255                         | Biệt danh           |
| faceURL       | string          | 255                         | URL ảnh đại diện |
| ex            | string          | 1024                        | Trường mở rộng   |

## Đối Tượng Thông Tin Người Dùng (UserInfo)

Đối tượng này chứa thông tin chi tiết về người dùng, bao gồm các trường từ `PublicUserInfo` và các trường bổ sung.

| Tên Trường    | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                                             | Giá Trị Mô Tả         |
| ---------------- | --------------- | --------------------------- | --------------------------------------------------- | ------------------------- |
| userID           | string          |                             | ID người dùng                                    |                           |
| nickname         | string          |                             | Biệt danh                                          |                           |
| faceURL          | string          |                             | URL ảnh đại diện                                |                           |
| ex               | string          |                             | Trường mở rộng                                  |                           |
| createTime       | int             |                             | Thời gian tạo tài khoản                         |                           |
| appMangerLevel   | int             |                             | Trường nội bộ, có thể bỏ qua                 |                           |
| globalRecvMsgOpt | int             |                             | Tùy chọn nhận tin nhắn ngoại tuyến toàn cầu | 0: Nhận, 2: Không nhận |

## Đối Tượng Thông Tin Bạn Bè (FriendInfo)

Đối tượng này chứa thông tin về mối quan hệ bạn bè giữa các người dùng.

| Tên Trường  | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                                 | Giá Trị Mô Tả |
| -------------- | --------------- | --------------------------- | --------------------------------------- | ----------------- |
| ownerUserID    | string          |                             | ID người dùng sở hữu mối quan hệ |                   |
| remark         | string          |                             | Ghi chú                                |                   |
| createTime     | int             |                             | Thời gian thiết lập quan hệ         |                   |
| addSource      | int             |                             | Nguồn thêm bạn                       |                   |
| operatorUserID | string          |                             | ID người thực hiện thao tác        |                   |
| ex             | string          |                             | Trường mở rộng                      |                   |
| friendUser     | UserInfo        | -                           | Đối tượng thông tin người dùng  |                   |

## Đối Tượng Thông Tin Danh Sách Đen (BlackInfo)

Đối tượng này chứa thông tin về người dùng trong danh sách đen.

| Tên Trường  | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                               | Giá Trị Mô Tả |
| -------------- | --------------- | --------------------------- | ------------------------------------- | ----------------- |
| ownerUserID    | string          |                             | ID người dùng                      |                   |
| createTime     | int             |                             | Thời gian thêm vào danh sách đen |                   |
| blackUserInfo  | PublicUserInfo  |                             | Thông tin người dùng bị chặn    |                   |
| addSource      | int             |                             | Nguồn thêm vào danh sách đen     |                   |
| operatorUserID | string          |                             | ID người thực hiện thao tác      |                   |
| ex             | string          |                             | Trường mở rộng                    |                   |

## Đối Tượng Thông Tin Nhóm (GroupInfo)

Đối tượng này chứa thông tin về một nhóm trong hệ thống.

| Tên Trường          | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                                                        | Giá Trị Mô Tả                                                                                                                                  |
| ---------------------- | --------------- | --------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| groupID                | string          |                             | ID nhóm                                                       |                                                                                                                                                    |
| groupName              | string          |                             | Tên nhóm                                                     |                                                                                                                                                    |
| notification           | string          |                             | Thông báo nhóm                                              |                                                                                                                                                    |
| introduction           | string          |                             | Giới thiệu nhóm                                             |                                                                                                                                                    |
| faceURL                | string          |                             | URL ảnh đại diện nhóm                                     |                                                                                                                                                    |
| ownerUserID            | string          |                             | ID chủ nhóm                                                  |                                                                                                                                                    |
| createTime             | int             |                             | Thời gian tạo nhóm                                          |                                                                                                                                                    |
| memberCount            | int             |                             | Số lượng thành viên nhóm                                 |                                                                                                                                                    |
| ex                     | string          |                             | Trường mở rộng nhóm                                       |                                                                                                                                                    |
| status                 | int             |                             | Trạng thái nhóm                                             | 0: Hoạt động, 1: Bị cấm (không dùng), 2: Giải tán, 3: Tất cả bị cấm nói                                                              |
| creatorUserID          | string          |                             | ID người tạo nhóm                                          |                                                                                                                                                    |
| groupType              | int             |                             | Loại nhóm                                                    | Cố định ở 2                                                                                                                                    |
| needVerification       | int             |                             | Yêu cầu xác minh để tham gia                              | 0: Yêu cầu tham gia cần phê duyệt, mời thành viên tự động; 1: Tất cả cần xác minh trừ lời mời quản trị; 2: Tham gia tự động |
| lookMemberInfo         | int             |                             | Thành viên có thể xem thông tin thành viên khác không | 0: Có, 1: Không                                                                                                                                  |
| applyMemberFriend      | int             |                             | Thành viên có thể kết bạn không                         | 0: Có, 1: Không                                                                                                                                  |
| notificationUpdateTime | int             |                             | Thời gian cập nhật thông báo nhóm                        |                                                                                                                                                    |
| notificationUserID     | string          |                             | ID người dùng cập nhật thông báo nhóm cuối cùng      |                                                                                                                                                    |

## Đối Tượng Thông Tin Thành Viên Nhóm (GroupMemberInfo)

Đối tượng này chứa thông tin về một thành viên trong nhóm.

| Tên Trường   | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                             | Giá Trị Mô Tả                                                                             |
| --------------- | --------------- | --------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| groupID         | string          |                             | ID nhóm                            |                                                                                               |
| userID          | string          |                             | ID thành viên nhóm               |                                                                                               |
| roleLevel       | int             |                             | Vai trò thành viên nhóm         | 100: Chủ nhóm, 60: Quản trị, 20: Thành viên                                             |
| joinTime        | int             |                             | Thời gian tham gia nhóm           |                                                                                               |
| nickname        | string          |                             | Biệt danh thành viên nhóm       |                                                                                               |
| faceURL         | string          |                             | URL ảnh đại diện thành viên   |                                                                                               |
| appManagerLevel | int             |                             | Trường nội bộ, có thể bỏ qua |                                                                                               |
| joinSource      | int             |                             | Nguồn tham gia                     | 1: Mời quản trị, 2: Mời thành viên, 3: Tìm kiếm để tham gia, 4: Tham gia qua mã QR |
| operatorUserID  | string          |                             | ID người thực hiện thao tác    |                                                                                               |
| ex              | string          |                             | Trường mở rộng                  |                                                                                               |
| muteEndTime     | int             |                             | Thời gian kết thúc cấm nói     |                                                                                               |
| inviterUserID   | string          |                             | ID người mời thành viên        |                                                                                               |

## Đối Tượng Thông Tin Yêu Cầu Kết Bạn (FriendRequestInfo)

Đối tượng này chứa thông tin về yêu cầu kết bạn giữa các người dùng.

| Tên Trường | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                            | Giá Trị Mô Tả                            |
| ------------- | --------------- | --------------------------- | ---------------------------------- | -------------------------------------------- |
| fromUserID    | string          |                             | ID người dùng gửi yêu cầu    |                                              |
| fromNickname  | string          |                             | Biệt danh người gửi yêu cầu  |                                              |
| fromFaceURL   | string          |                             | URL ảnh đại diện người gửi  |                                              |
| toUserID      | string          |                             | ID người dùng nhận yêu cầu   |                                              |
| toNickname    | string          |                             | Biệt danh người nhận yêu cầu |                                              |
| toFaceURL     | string          |                             | URL ảnh đại diện người nhận |                                              |
| handleResult  | int             |                             | Trạng thái yêu cầu kết bạn   | 1: Chấp nhận, 0: Đang chờ, -1: Từ chối |
| reqMsg        | string          |                             | Tin nhắn yêu cầu                |                                              |
| createTime    | int             |                             | Thời gian gửi yêu cầu          |                                              |
| handlerUserID | string          |                             | ID người xử lý yêu cầu       |                                              |
| handleMsg     | string          |                             | Tin nhắn xử lý                  |                                              |
| handleTime    | int             |                             | Thời gian xử lý yêu cầu       |                                              |
| ex            | string          |                             | Trường mở rộng                 |                                              |

## Đối Tượng Yêu Cầu Tham Gia Nhóm (GroupRequestInfo)

Đối tượng này chứa thông tin về yêu cầu tham gia một nhóm.

| Tên Trường | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                                 | Giá Trị Mô Tả                                                  |
| ------------- | --------------- | --------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| userInfo      | PublicUserInfo  |                             | Thông tin người dùng gửi yêu cầu |                                                                    |
| groupInfo     | GroupInfo       |                             | Thông tin nhóm                        |                                                                    |
| handleResult  | int             |                             | Kết quả xử lý                       | 1: Chấp nhận, 0: Đang chờ, -1: Từ chối                       |
| reqMsg        | string          |                             | Tin nhắn yêu cầu tham gia            |                                                                    |
| handleMsg     | string          |                             | Tin nhắn xử lý                       |                                                                    |
| reqTime       | int             |                             | Thời gian gửi yêu cầu               |                                                                    |
| handleUserID  | string          |                             | ID người xử lý yêu cầu            |                                                                    |
| handleTime    | int             |                             | Thời gian xử lý yêu cầu            |                                                                    |
| ex            | string          |                             | Trường mở rộng                      |                                                                    |
| joinSource    | int             |                             | Nguồn tham gia                         | 1: Mời quản trị, 2: Mời thành viên, 3: Tìm kiếm, 4: Mã QR |
| inviterUserID | string          |                             | ID người mời                         |                                                                    |

## Đối Tượng Thông Tin Cơ Bản Hình Ảnh (PictureBaseInfo)

Đối tượng này cung cấp thông tin cơ bản về hình ảnh.

| Tên Trường | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                        | Giá Trị Mô Tả |
| ------------- | --------------- | --------------------------- | ------------------------------ | ----------------- |
| uuid          | string          |                             | UUID duy nhất của hình ảnh |                   |
| type          | string          |                             | Loại hình ảnh               |                   |
| size          | int             |                             | Kích thước hình ảnh       |                   |
| width         | int             |                             | Chiều rộng hình ảnh        |                   |
| height        | int             |                             | Chiều cao hình ảnh          |                   |

## Đối Tượng Thông Tin Cuộc Trò Chuyện (ConversationInfo)

Đối tượng này chứa thông tin về một cuộc trò chuyện.

| Tên Trường         | Kiểu Dữ Liệu | Giới Hạn Độ Dài Chuỗi | Mô Tả                                              | Giá Trị Mô Tả                                   |
| --------------------- | --------------- | --------------------------- | ---------------------------------------------------- | --------------------------------------------------- |
| ownerUserID           | string          |                             | ID người dùng sở hữu cuộc trò chuyện         |                                                     |
| conversationID        | string          |                             | ID cuộc trò chuyện                                |                                                     |
| recvMsgOpt            | int             |                             | Tùy chọn nhận tin nhắn                           | 0: Nhận, 1: Tắt tiếng, 2: Nhận im lặng         |
| conversationType      | int             |                             | Loại cuộc trò chuyện                             | 1: Trò chuyện đơn, 3: Trò chuyện nhóm        |
| userID                | string          |                             | ID người dùng (áp dụng khi loại là 1)         |                                                     |
| groupID               | string          |                             | ID nhóm (áp dụng khi loại là 3)                 |                                                     |
| isPinned              | boolean         |                             | Cuộc trò chuyện có được ghim không           |                                                     |
| attachedInfo          | string          |                             | Trường mở rộng đặc thù của OpenIM            |                                                     |
| isPrivateChat         | boolean         |                             | Chế độ trò chuyện riêng tư có bật không    |                                                     |
| groupAtType           | int             |                             | Loại đề cập nhóm                                | Định danh đặc biệt cho @ownerUserID hoặc @all |
| ex                    | string          |                             | Trường mở rộng của người dùng                |                                                     |
| burnDuration          | int             |                             | Thời gian xóa tin nhắn sau khi đọc              |                                                     |
| minSeq                | int             |                             | Chuỗi tối thiểu người dùng có thể truy xuất |                                                     |
| maxSeq                | int             |                             | Chuỗi tối đa người dùng có thể truy xuất    |                                                     |
| msgDestructTime       | int             |                             | Khoảng thời gian hủy tin nhắn                    |                                                     |
| latestMsgDestructTime | int             |                             | Thời gian hủy tin nhắn mới nhất                 |                                                     |
| isMsgDestruct         | boolean         |                             | Chế độ hủy tin nhắn định giờ có bật không |                                                     |

### Ghi Chú

* `createTime`, `reqTime`, `joinTime`, `handleTime`, `notificationUpdateTime`, `muteEndTime`, `burnDuration`, `msgDestructTime`, `latestMsgDestructTime` sử dụng định dạng timestamp (thời gian tính bằng mili-giây kể từ Unix epoch).
* `ex` là trường mở rộng, thường được sử dụng để lưu trữ dữ liệu bổ sung dưới dạng chuỗi JSON.
* `operationID` nên được tạo duy nhất để hỗ trợ theo dõi và gỡ lỗi.
* `platformID` xác định loại thiết bị mà người dùng sử dụng để đăng nhập.
* `sessionType` và `conversationType` xác định loại phiên trò chuyện (đơn, nhóm, hoặc thông báo hệ thống).
* `roleLevel` trong `GroupMemberInfo` xác định vai trò của thành viên trong nhóm (chủ nhóm, quản trị viên, hoặc thành viên thường).
* `handleResult` trong `FriendRequestInfo` và `GroupRequestInfo` biểu thị trạng thái xử lý yêu cầu (chấp nhận, đang chờ, hoặc từ chối).
* `needVerification`, `lookMemberInfo`, và `applyMemberFriend` trong `GroupInfo` kiểm soát các quy tắc tham gia và tương tác trong nhóm.
* `joinSource` và `addSource` mô tả nguồn gốc của việc tham gia nhóm hoặc kết bạn (ví dụ: qua tìm kiếm, mã QR, hoặc lời mời).
* `groupAtType` trong `ConversationInfo` hỗ trợ các đề cập đặc biệt trong nhóm như @all hoặc @ownerUserID.
