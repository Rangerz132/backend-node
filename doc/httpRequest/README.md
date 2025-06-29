# 📬 HTTP Request Overview

An HTTP request is the message sent by a client (like a browser or app) to a server to ask for a resource or perform an action. It consists mainly of:

---

## 1. Request Line

The first line indicates the HTTP method and the URL path:
Common HTTP methods:

- `GET`: Retrieve data (usually no body)
- `POST`: Create data (usually with a body)
- `PUT`: Replace a resource entirely
- `PATCH`: Update part of a resource
- `DELETE`: Remove a resource

---

## 2. Headers

Headers provide metadata about the request or client. They are key-value pairs sent after the request line.

Common headers include:

- **Host**: The domain of the server (required in HTTP/1.1).
- **Content-Type**: Specifies the media type (format) of the request body.  
  Examples:
  - `application/json` (JSON data)
  - `application/x-www-form-urlencoded` (form data)
  - `multipart/form-data` (file uploads)
- **Authorization**: Carries credentials for authentication.
  - **Basic**: Base64-encoded username and password.  
    Example: `Authorization: Basic dXNlcjpwYXNz`
  - **Bearer**: Token-based authentication, commonly JWT tokens.  
    Example: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Accept**: Indicates which response formats the client can handle.
- **Content-Length**: Size of the request body in bytes (auto-calculated by clients).

---

## 3. Body (Payload)

The body contains data sent to the server, mostly with methods like `POST`, `PUT`, `PATCH`.

- Its format is specified by the `Content-Type` header.
- Common body formats:
  - **JSON** (`application/json`): Most popular for APIs.
  - **Form URL-encoded** (`application/x-www-form-urlencoded`): Key-value pairs like form data.
  - **Multipart/form-data**: For file uploads and mixed content.

---

## 4. Authentication Schemes

### Basic Authentication

- Uses Base64 encoding of `username:password`.
- Less secure unless over HTTPS.
- Example header: Authorization: Basic dXNlcjpwYXNz

### Bearer Authentication

- Uses tokens, typically JWTs.
- More secure and flexible.
- Example header: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

---

# 📬 HTTP Request Types with Headers and Body Examples

---

## 1. Create Resource (POST)

**Description:** Create a new resource by sending JSON data.

```http
POST /users
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{
"name": "Alice",
"email": "alice@example.com"
}

```

---

## 2. Authenticate (POST)

**Description:** Send credentials to authenticate a user.

```http
POST /auth/login
Host: api.example.com
Content-Type: application/json

{
  "email": "alice@example.com",
  "password": "MySecurePassword123"
}

```

---

## 3. Fetch Resource (GET)

**Description:** Retrieve a resource. No body needed.

```http
GET /users/123
Host: api.example.com
Authorization: Bearer <token>
Accept: application/json
```

---

## 4. Update Entire Resource (PUT)

**Description:** Replace the entire resource with new data.

```http
PUT /users/123
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Alice Updated",
  "email": "alice.updated@example.com"
}
```

---

## 5. Partially Update Resource (PATCH)

**Description:** Update specific fields of a resource.

```http
PATCH /users/123
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{
  "email": "alice.new@example.com"
}
```

---

6. Delete Resource (DELETE)

**Description:** Remove a resource by ID. No body required.

```http
DELETE /users/123
Host: api.example.com
Authorization: Bearer <token>
```

---

7. Form Submission (POST with x-www-form-urlencoded)

**Description:** Submit form data encoded in key=value pairs.

```http
POST /form
Host: api.example.com
Content-Type: application/x-www-form-urlencoded

name=Alice&email=alice@example.com
```
