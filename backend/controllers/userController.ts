import { Request, Response, NextFunction } from "express";
import * as UserModel from "../models/userModel";

export const getUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const users = await UserModel.getAllUsers();
		res.json(users);
	} catch (err) {
		next(err);
	}
};

export const getUserById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = parseInt(req.params.id);
		const user = await UserModel.getUserById(id);
		if (!user) {
			return res.status(404).send("User not found");
		}
		res.json(user);
	} catch (err) {
		next(err);
	}
};

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, lastName, age } = req.body;
		if (
			!name ||
			typeof name !== "string" ||
			!lastName ||
			typeof lastName !== "string" ||
			!age ||
			typeof age !== "number"
		) {
			return res.status(400).send("Invalid name or lastName or age");
		}
		const newUser = await UserModel.addUser({ name, lastName, age });
		res.status(201).json(newUser);
	} catch (err) {
		next(err);
	}
};

export const updateUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = parseInt(req.params.id);
		const { name, lastName, age } = req.body;
		if (
			!name ||
			typeof name !== "string" ||
			!lastName ||
			typeof lastName !== "string" ||
			!age ||
			typeof age !== "number"
		) {
			return res.status(400).send("Invalid name or lastName or age");
		}
		const updated = await UserModel.updateUser(id, { name, lastName, age });
		if (!updated) {
			return res.status(404).send("User not found");
		}
		res.json(updated);
	} catch (err) {
		next(err);
	}
};

export const deleteUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = parseInt(req.params.id);
		const removed = await UserModel.deleteUser(id);
		if (!removed) {
			return res.status(404).send("User not found");
		}
		res.status(204).send();
	} catch (err) {
		next(err);
	}
};
