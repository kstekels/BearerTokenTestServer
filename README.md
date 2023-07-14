# Test server for authentication with bearer token

1. Navigate to project directory

```
cd <directory>
```

2. Install node modules

```
npm install
```

3. Endpoints:

   - Use **/api/login** to get Bearer token

   ```
   http://127.0.0.1:500/api/login
   ```

   - Use **/api/profile** to get user data

   ```
   http://127.0.0.1:500/api/profile
   ```

   - User **/api/colors**

   ```
   http://127.0.0.1:500/api/colors
   ```

## Example of Login Error response

```
{
    "status": 403,
    "reason": "User not Authorized",
    "message": "To authorize, please use </api/login> first to retrive Bearer token"
}
```

## Example of Successful login response

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNjg5MzI1NDc3NjU2LCJ1c2VyRW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIxMjMifSwiaWF0IjoxNjg5MzI1NDc3fQ.G3Hs7oXOGR0XDzAZkMJBTKZwfXii_yuuDEhDkDybQVo"
}
```

## Example of Profile response

```
{
    "message": "Welcom to Profile",
    "userData": {
        "user": {
            "id": 1689262578304,
            "userEmail": "user@example.com",
            "password": "123"
        },
        "iat": 1689262578
    }
}
```

## Example of Colors response

```
{
    "colors": [
        "red",
        "green",
        "blue",
        "purple",
        "yellow"
    ]
}
```
