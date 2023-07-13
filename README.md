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

   1. Use **/api/login** to get Bearer token

   ```
   http://127.0.0.1:500/api/login
   ```

   2. Use **/api/profile** to get user data

   ```
   http://127.0.0.1:500/api/profile
   ```

## Example of response

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
