import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async (): Promise<Post[]> => {
	return await prisma.post.findMany();
};

export const getPostById = async (id: number): Promise<Post | null> => {
	return await prisma.post.findUnique({ where: { id } });
};

export const addPost = async (post: Omit<Post, "id">): Promise<Post> => {
	return await prisma.post.create({ data: post });
};

export const updatePost = async (
	id: number,
	updatedFields: Partial<Omit<Post, "id">>
): Promise<Post | null> => {
	try {
		return await prisma.post.update({
			where: { id },
			data: updatedFields,
		});
	} catch {
		return null; // if post with id does not exist
	}
};

export const deletePost = async (id: number): Promise<boolean> => {
	try {
		await prisma.post.delete({ where: { id } });
		return true;
	} catch {
		return false;
	}
};
