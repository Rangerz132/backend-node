# 🌐 HTTP Response Status Codes with Examples

HTTP status codes are standardized responses issued by a server in response to a client's request. They are grouped into five main categories:

- **1xx**: Informational
- **2xx**: Success
- **3xx**: Redirection
- **4xx**: Client Errors
- **5xx**: Server Errors

---

## 📝 Summary Table

| Code | Type          | Meaning               |
| ---- | ------------- | --------------------- |
| 100  | Informational | Continue              |
| 200  | Success       | OK                    |
| 201  | Success       | Created               |
| 204  | Success       | No Content            |
| 301  | Redirection   | Moved Permanently     |
| 302  | Redirection   | Found                 |
| 304  | Redirection   | Not Modified          |
| 400  | Client Error  | Bad Request           |
| 401  | Client Error  | Unauthorized          |
| 403  | Client Error  | Forbidden             |
| 404  | Client Error  | Not Found             |
| 409  | Client Error  | Conflict              |
| 422  | Client Error  | Unprocessable Entity  |
| 500  | Server Error  | Internal Server Error |
| 502  | Server Error  | Bad Gateway           |
| 503  | Server Error  | Service Unavailable   |
| 504  | Server Error  | Gateway Timeout       |

---

## 💡 Tip

Use these status codes properly in your APIs to:

- Improve error handling
- Make debugging easier
- Help client applications understand what went wrong

---

## ✅ 1xx - Informational

### 100 Continue

The server acknowledges the request headers and expects the body to follow.  
**Example:**

```http
Client:
POST /upload
Expect: 100-continue

Server:
 100 Continue
```

### 101 Switching Protocols

The server agrees to switch protocols (e.g. HTTP → WebSocket).  
**Example:**

```http
Client:
GET /chat
Host: example.com
Upgrade: websocket
Connection: Upgrade

Server:
 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

---

## ✅ 2xx - Success

### 200 OK

The request has succeeded.  
**Example:**

```http
Client:
GET /users/123
Host: api.example.com

Server:
 200 OK
Content-Type: application/json

{ "id": 123, "name": "Alice" }
```

### 201 Created

A new resource has been created.  
**Example:**

```http
Client:
POST /users
Host: api.example.com
Content-Type: application/json

{ "name": "Alice" }

Server:
 201 Created
Location: /users/123
Content-Type: application/json

{ "id": 123, "name": "Alice" }
```

### 202 Accepted

The request has been accepted but not yet processed.  
**Example:**

```http
Client:
POST /images/process
Host: api.example.com

Server:
 202 Accepted
Content-Type: application/json

{ "message": "Processing started." }
```

### 204 No Content

The request was successful but there is no content to return.  
**Example:**

```http
Client:
DELETE /users/123
Host: api.example.com

Server:
 204 No Content
```

---

## 🚦 3xx - Redirection

### 301 Moved Permanently

The resource has been moved to a new URL permanently.  
**Example:**

```http
Client:
GET /old-page
Host: example.com

Server:
 301 Moved Permanently
Location: /new-page
```

### 302 Found

Temporary redirection to another URL.  
**Example:**

```http
Client:
GET /login
Host: example.com

Server:
 302 Found
Location: /signin
```

### 303 See Other

Redirects to another resource after a POST.  
**Example:**

```http
Client:
POST /submit
Host: example.com

Server:
 303 See Other
Location: /status
```

### 304 Not Modified

Cached resource has not been modified.  
**Example:**

```http
Client:
GET /app.js
If-Modified-Since: Sat, 10 Jun 2025 10:00:00 GMT

Server:
 304 Not Modified
```

---

## ❌ 4xx - Client Errors

### 400 Bad Request

Malformed request syntax.  
**Example:**

```http
Client:
POST /users
Content-Type: application/json

{ name: }

Server:
 400 Bad Request
{ "error": "Invalid JSON format." }
```

### 401 Unauthorized

Authentication is missing or invalid.  
**Example:**

```http
Client:
GET /admin

Server:
 401 Unauthorized
WWW-Authenticate: Bearer
```

### 403 Forbidden

Access to the resource is denied.  
**Example:**

```http
Client:
DELETE /admin/user/123

Server:
 403 Forbidden
{ "error": "Access denied." }
```

### 404 Not Found

Resource does not exist.  
**Example:**

```http
Client:
GET /users/9999

Server:
 404 Not Found
{ "error": "User not found." }
```

### 405 Method Not Allowed

The method is not allowed on this resource.  
**Example:**

```http
Client:
DELETE /readonly

Server:
 405 Method Not Allowed
```

### 409 Conflict

Request conflicts with the current state.  
**Example:**

```http
Client:
POST /users
Content-Type: application/json

{ "email": "duplicate@example.com" }

Server:
 409 Conflict
{ "error": "User already exists." }
```

### 410 Gone

The resource was previously available but is now permanently gone.  
**Example:**

```http
Client:
GET /v1/api

Server:
 410 Gone
```

### 415 Unsupported Media Type

The server does not support the request media type.  
**Example:**

```http
Client:
POST /upload
Content-Type: application/xml

Server:
 415 Unsupported Media Type
{ "error": "Only application/json is supported." }
```

### 422 Unprocessable Entity

Request is well-formed but has semantic errors.  
**Example:**

```http
Client:
POST /orders
Content-Type: application/json

{ "quantity": -5 }

Server:
 422 Unprocessable Entity
{ "error": "Quantity must be positive." }
```

---

## 💥 5xx - Server Errors

### 500 Internal Server Error

Generic error on the server.  
**Example:**

```http
Client:
GET /dashboard

Server:
 500 Internal Server Error
{ "error": "Unexpected server error." }
```

### 501 Not Implemented

Request method is not supported by the server.  
**Example:**

```http
Client:
PATCH /users/1

Server:
 501 Not Implemented
```

### 502 Bad Gateway

Invalid response from upstream server.  
**Example:**

```http
Client:
GET /data

Server:
 502 Bad Gateway
{ "error": "Upstream server error." }
```

### 503 Service Unavailable

Server is down or overloaded.  
**Example:**

```http
Client:
GET /checkout

Server:
 503 Service Unavailable
Retry-After: 120
```

### 504 Gateway Timeout

Timeout from upstream server.  
**Example:**

```http
Client:
GET /external-api

Server:
 504 Gateway Timeout
{ "error": "Upstream timeout." }
```
