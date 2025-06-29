import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<User[]> => {
	return await prisma.user.findMany();
};

export const getUserById = async (id: number): Promise<User | null> => {
	return await prisma.user.findUnique({ where: { id } });
};

export const addUser = async (user: Omit<User, "id">): Promise<User> => {
	return await prisma.user.create({ data: user });
};

export const updateUser = async (
	id: number,
	updatedFields: Partial<Omit<User, "id">>
): Promise<User | null> => {
	try {
		return await prisma.user.update({
			where: { id },
			data: updatedFields,
		});
	} catch {
		return null; // if user with id does not exist
	}
};

export const deleteUser = async (id: number): Promise<boolean> => {
	try {
		await prisma.user.delete({ where: { id } });
		return true;
	} catch {
		return false;
	}
};
