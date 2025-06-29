export interface Post {
	id: number;
	title: string;
	content: string;
}

let posts: Post[] = [
	{ id: 1, title: "First Post", content: "This is the first post." },
];

export const getAllPosts = (): Post[] => posts;

export const getPostById = (id: number): Post | undefined => {
	return posts.find((post) => post.id === id);
};

export const addPost = (post: Omit<Post, "id">): Post => {
	const newPost: Post = { id: Date.now(), ...post };
	posts.push(newPost);
	return newPost;
};

export const updatePost = (
	id: number,
	updatedFields: Partial<Omit<Post, "id">>
): Post | null => {
	const index = posts.findIndex((post) => post.id === id);
	if (index === -1) return null;
	posts[index] = { ...posts[index], ...updatedFields };
	return posts[index];
};

export const deletePost = (id: number): boolean => {
	const originalLength = posts.length;
	posts = posts.filter((post) => post.id !== id);
	return posts.length < originalLength;
};
