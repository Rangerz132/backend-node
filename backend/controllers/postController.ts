import { Request, Response, NextFunction } from "express";
import * as PostModel from "../models/postModel";

export const getPosts = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		const posts = PostModel.getAllPosts();
		res.json(posts);
	} catch (err) {
		next(err);
	}
};

export const getPostById = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		const id = parseInt(req.params.id);
		const post = PostModel.getPostById(id);
		if (!post) {
			res.status(404).send("Post not found");
			return;
		}
		res.json(post);
	} catch (err) {
		next(err);
	}
};

export const createPost = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		const { title, content } = req.body;
		if (
			!title ||
			typeof title !== "string" ||
			!content ||
			typeof content !== "string"
		) {
			res.status(400).send("Invalid title or content");
			return;
		}
		const newPost = PostModel.addPost({ title, content });
		res.status(201).json(newPost);
	} catch (err) {
		next(err);
	}
};

export const updatePost = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		const id = parseInt(req.params.id);
		const { title, content } = req.body;
		if (
			!title ||
			typeof title !== "string" ||
			!content ||
			typeof content !== "string"
		) {
			res.status(400).send("Invalid title or content");
			return;
		}
		const updated = PostModel.updatePost(id, { title, content });
		if (!updated) {
			res.status(404).send("Post not found");
			return;
		}
		res.json(updated);
	} catch (err) {
		next(err);
	}
};

export const deletePost = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		const id = parseInt(req.params.id);
		const removed = PostModel.deletePost(id);
		if (!removed) {
			res.status(404).send("Post not found");
			return;
		}
		res.status(204).send();
	} catch (err) {
		next(err);
	}
};
