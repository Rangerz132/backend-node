import { Request, Response, NextFunction } from "express";
import * as PostModel from "../models/postModel";

export const getPosts = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const posts = await PostModel.getAllPosts();
		res.json(posts);
	} catch (err) {
		next(err);
	}
};

export const getPostById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = parseInt(req.params.id);
		const post = await PostModel.getPostById(id);
		if (!post) {
			return res.status(404).send("Post not found");
		}
		res.json(post);
	} catch (err) {
		next(err);
	}
};

export const createPost = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { title, content } = req.body;
		if (
			!title ||
			typeof title !== "string" ||
			!content ||
			typeof content !== "string"
		) {
			return res.status(400).send("Invalid title or content");
		}
		const newPost = await PostModel.addPost({ title, content });
		res.status(201).json(newPost);
	} catch (err) {
		next(err);
	}
};

export const updatePost = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = parseInt(req.params.id);
		const { title, content } = req.body;
		if (
			!title ||
			typeof title !== "string" ||
			!content ||
			typeof content !== "string"
		) {
			return res.status(400).send("Invalid title or content");
		}
		const updated = await PostModel.updatePost(id, { title, content });
		if (!updated) {
			return res.status(404).send("Post not found");
		}
		res.json(updated);
	} catch (err) {
		next(err);
	}
};

export const deletePost = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = parseInt(req.params.id);
		const removed = await PostModel.deletePost(id);
		if (!removed) {
			return res.status(404).send("Post not found");
		}
		res.status(204).send();
	} catch (err) {
		next(err);
	}
};
