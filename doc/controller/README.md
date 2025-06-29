# Controllers

### What is a Controller?

A controller is responsible for handling incoming HTTP requests, processing data (often by interacting with models or services), and sending back the appropriate HTTP responses.

Controllers act as the “middle layer” between routes and the data layer (database/models). They contain your application's business logic.

---

### Why use Controllers?

- Separate business logic from route definitions for cleaner code
- Manage request validation, error handling, and data manipulation
- Keep routes simple and focused only on mapping URLs to controller actions

---

### Example: User Controller with Prisma (ES Modules)

```js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get a user by ID
export const getUser = async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const user = await prisma.user.findUnique({
			where: { id: userId },
		});
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

// Create a new user
export const createUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const newUser = await prisma.user.create({
			data: { name, email, password },
		});
		res.status(201).json(newUser);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

// Update a user by ID
export const updateUser = async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		const { name, email, password } = req.body;

		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: { name, email, password },
		});

		res.json(updatedUser);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
	try {
		const userId = parseInt(req.params.id);
		await prisma.user.delete({
			where: { id: userId },
		});
		res.status(204).send(); // No content
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server error" });
	}
};
```
