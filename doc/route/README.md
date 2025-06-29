# Routes

### What are Routes?

Routes define the endpoints (URLs + HTTP methods) your application listens to and how it responds. They map incoming requests to controller functions or middleware.

Routes specify:

- The HTTP method (GET, POST, PUT, DELETE, etc.)
- The URL pattern (e.g., `/users/:id`)
- The handler function that processes the request and sends a response

### Why use Routes?

- Organize your API endpoints clearly
- Separate concerns by delegating request handling to controllers
- Facilitate middleware usage on specific endpoints or groups of endpoints

### Example: Defining Routes in Express

```js
import express from "express";
import {
	getUser,
	createUser,
	updateUser,
	deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// GET request to fetch a user by ID
router.get("/users/:id", getUser);

// POST request to create a new user
router.post("/users", createUser);

// PUT request to update a user completely
router.put("/users/:id", updateUser);

// DELETE request to remove a user
router.delete("/users/:id", deleteUser);

export default router;
```

```js
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Prefix all user routes with /api
app.use("/api", userRoutes);

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
```
