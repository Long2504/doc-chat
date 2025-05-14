1. Register user

   ```
   curl --location 'http://localhost:10009/user/import/json' \
   --header 'operationID: 1646445464564' \
   --header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJpbUFkbWluIiwiVXNlclR5cGUiOjIsIlBsYXRmb3JtSUQiOjAsImV4cCI6MTc1NDkwNDkxOCwibmJmIjoxNzQ3MTI4ODU4LCJpYXQiOjE3NDcxMjg5MTh9.mftQcJh4Bt79P4_SrqF27MdYl1v7gSUH25rsBCYE3TI' \
   --header 'Content-Type: text/plain' \
   --data '{
       "users": [
           {
               "nickname": "test123",
               "faceURL": "",
               "birth": 1748512181000,
               "gender": 1,
               "areaCode": "+86",
               "phoneNumber": "121212121",
               "password": "c4ca4238a0b923820dcc509a6f75849b",
               "registerType": 0
           }
       ]
   }'
   ```

   response

   ```
   {
       "errCode": 0,
       "errMsg": "",
       "errDlt": ""
   }
   ```
2. Login

   ```
   curl --location 'http://localhost:10008/account/login' \
   --header 'operationID: 423432432' \
   --header 'Content-Type: application/json' \
   --data '{
       "areaCode": "+86",
       "phoneNumber": "111111111",
       "password": "c4ca4238a0b923820dcc509a6f75849b",
       "platform": 5
   }'
   ```

   response

   ```
   {
       "errCode": 0,
       "errMsg": "",
       "errDlt": "",
       "data": {
           "imToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIyNzA0ODQxMDk2IiwiUGxhdGZvcm1JRCI6NSwiZXhwIjoxNzU0OTkzMzYzLCJpYXQiOjE3NDcyMTczNTh9.swwwJSdwHFm_ymLYMYJmo5T-pAQ5Wa4qyowyYHg7VS0",
           "chatToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIyNzA0ODQxMDk2IiwiVXNlclR5cGUiOjEsIlBsYXRmb3JtSUQiOjAsImV4cCI6MTc1NDk5MzM2MywibmJmIjoxNzQ3MjE3MzAzLCJpYXQiOjE3NDcyMTczNjN9.w88x-4jFCcIG3eyVM1SLGQkM57jUgpn7iDaSJ3-IwxM",
           "userID": "2704841096"
       }
   }
   ```
