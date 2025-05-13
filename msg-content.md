# Tài liệu Mô tả Loại Nội dung Tin nhắn

## Tổng quan

OpenIM hỗ trợ nhiều loại nội dung tin nhắn khác nhau để đáp ứng nhu cầu giao tiếp đa dạng. Tài liệu này cung cấp mô tả chi tiết về từng loại nội dung, bao gồm cấu trúc và cách sử dụng.

## Các Loại Nội dung Tin nhắn

### 1. Tin nhắn Văn bản (contentType: 101)

* **Mô tả** : Tin nhắn văn bản thuần túy.
* **Cấu trúc Nội dung** :

```json
{
    content_type: 101,
    content: {
        "content": "Xin chào, đây là một tin nhắn văn bản!"
    },
    ...
}
```

* **Cách sử dụng** : Dùng để gửi các tin nhắn dựa trên văn bản đơn giản.

### 2. Tin nhắn Hình ảnh (contentType: 102)

* **Mô tả** : Tin nhắn chứa hình ảnh.
* **Cấu trúc Nội dung** :

```json
{
    "content_type": 102,
    "content": {
        "sourcePath": "",
        "sourcePicture": {
            "uuid": "",
            "type": "",
            "size": 0,
            "width": 0,
            "height": 0,
            "url": ""
        },
        "bigPicture": {
            "uuid": "",
            "type": "",
            "size": 0,
            "width": 0,
            "height": 0,
            "url": ""
        },
        "snapshotPicture": {
            "uuid": "",
            "type": "",
            "size": 0,
            "width": 0,
            "height": 0,
            "url": ""
        }
    },
    ...
}
```

* **Cách sử dụng** : Dùng để chia sẻ hình ảnh với các thông tin như kích thước và độ phân giải.
* Ví dụ:

  ```
  {
      "content_type": 102,
      "content": {
          "sourcePath": "/484130918_9315593481810670_3314060385794625929_n.jpg",
          "sourcePicture": {
              "uuid": "67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg",
              "type": "image/jpeg",
              "size": 54076,
              "width": 1440,
              "height": 1218,
              "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"
          },
          "bigPicture": {
              "uuid": "67b1860b-8270-477c-8e53-45d7bc168ec8/484130918_9315593481810670_3314060385794625929_n.jpg",
              "type": "image/jpeg",
              "size": 54076,
              "width": 1440,
              "height": 1218,
              "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg"
          },
          "snapshotPicture": {
              "size": 0,
              "width": 640,
              "height": 640,
              "url": "http://localhost:10002/object/3074200874/msg_picture_518cc0cf63ed4c22c5dfbe626f7a9425.jpg?height=640&type=image&width=640"
          }
      }
  }
  ```

### 4. Tin nhắn Video (contentType: 104)

* **Mô tả** : Tin nhắn chứa tệp video.
* **Cấu trúc Nội dung** :

```json
{
    "content_type": 104,
    "content": {
        "videoPath": "",
        "videoUUID": "",
        "videoUrl": "",
        "videoType": "",
        "videoSize": 0,
        "duration": 0,
        "snapshotPath": "",
        "snapshotUUID": "",
        "snapshotSize": 0,
        "snapshotUrl": "",
        "snapshotWidth": 0,
        "snapshotHeight": 0
    },
    ...
}
```

* **Cách sử dụng** : Dùng để chia sẻ video kèm hình ảnh thu nhỏ.

Ex

```
{
    "content_type": 104,
    "content": {
        "videoPath": "/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4",
        "videoUUID": "e3957310-9cb5-43f4-9009-c7f77f8a4426/Snapinsta.app_video_323111578_1483434279082235_5943627395971184615_n.mp4",
        "videoUrl": "http://localhost:10002/object/3074200874/msg_video_8e0d170c884befbdc89ad613b3b72e53.mp4",
        "videoType": "video/mp4",
        "videoSize": 1063636,
        "duration": 10,
        "snapshotPath": "/screenshot1747101712809.png",
        "snapshotUUID": "05d7e078-f284-4b22-9d6e-3e51cac259d0/screenshot1747101712809.png",
        "snapshotSize": 924771,
        "snapshotUrl": "http://localhost:10002/object/3074200874/msg_videoSnapshot_8e0d170c884befbdc89ad613b3b72e53.png",
        "snapshotWidth": 1080,
        "snapshotHeight": 1922,
        "snapshotType": "image/png"
      },
    ...
}
```

### 5. Tin nhắn Tệp (contentType: 105)

* **Mô tả** : Tin nhắn chứa tệp chung.
* **Cấu trúc Nội dung** :

```json
{
    "content_type": 105,
    "content": {
        "filePath": "",
        "uuid": "",
        "sourceUrl": "",
        "fileName": "",
        "fileSize": 0,
        "fileType": ""
    },
    ...
}
```

* **Cách sử dụng** : Dùng để chia sẻ các loại tệp như PDF, tài liệu, v.v.
* ex

  ```
  {
      "content_type": 105,
      "content": {
          "filePath": "/Long SA.pdf",
          "uuid": "bb8ee193-1343-4b1a-8462-402e1a0002b2/Long SA.pdf",
          "sourceUrl": "http://localhost:10002/object/9147513913/msg_file_d3c5de1da3b5ff4a07d174d8cc1e587f/Long SA.pdf",
          "fileName": "Long SA.pdf",
          "fileSize": 801005,
          "fileType": "application/pdf"
        },
      ...
  }
  ```

### 7. Tin nhắn Danh thiếp (contentType: 108)

* **Mô tả** : Tin nhắn chứa danh thiếp hoặc thông tin liên hệ.
* **Cấu trúc Nội dung** :

```json
{
    "content_type": 108,
    "content": {
        "userID": "",
        "nickname": "",
        "faceURL": "",
        "ex": ""
    },
    ...
}
```

* **Cách sử dụng** : Dùng để chia sẻ thông tin liên hệ.

ex:

```
{
    "content_type": 108,
    "content": {
        "userID": "user123",
        "nickname": "John Doe",
        "faceURL": "https://example.com/avatar.jpg",
        "ex": ""
    }
}
```

### 8. Tin nhắn Reply (contentType: 114)

* **Mô tả** : Tin nhắn trích dẫn một tin nhắn khác.
* **Cấu trúc Nội dung** :

```json
{
  "text": "",
  "quoteMessage": {
    "clientMsgID": "",
    "serverMsgID": "",
    "createTime": ,
    "sendTime": ,
    "sessionType": ,
    "sendID": "",
    "recvID": "",
    "msgFrom": ,
    "contentType": ,
    "senderPlatformID": ,
    "senderNickname": "",
    "senderFaceUrl": "",
    "seq": ,
    "isRead": ,
    "status": ,
    "textElem": {
      "content": ""
    },
    "attachedInfoElem": {
      "groupHasReadInfo": {
        "hasReadCount": ,
        "groupMemberCount": 
      },
      "isPrivateChat": false,
      "burnDuration": 0,
      "hasReadTime": 0,
      "isEncryption": false,
      "inEncryptStatus": false
    }
  }
}

```

* **Cách sử dụng** : Dùng để trả lời hoặc tham chiếu đến một tin nhắn trước đó.

ex

```
{
    "content_type": 114,
    "content": {
        "text": "Reply thử 12313",
        "quoteMessage": {
            "clientMsgID": "db5921264e468d34cb65ebcf399e0b83",
            "serverMsgID": "48d179f2f58ec18c3b53b713e0d3ce44",
            "createTime": 1746756998377,
            "sendTime": 1746756998465,
            "sessionType": 1,
            "sendID": "1222421964",
            "recvID": "8855572844",
            "msgFrom": 100,
            "contentType": 101,
            "senderPlatformID": 5,
            "senderNickname": "Long",
            "senderFaceUrl": "http://localhost:10002/object/imAdmin/123.jpg",
            "seq": 5,
            "isRead": true,
            "status": 2,
            "textElem": {
                "content": "https://docs.openim.io/"
            },
            "attachedInfoElem": {
                "groupHasReadInfo": {
                    "hasReadCount": 0,
                    "groupMemberCount": 4
                },
                "isPrivateChat": false,
                "burnDuration": 0,
                "hasReadTime": 0,
                "isEncryption": false,
                "inEncryptStatus": false
            }
        }
    }
}
```
