import { Router } from "express";
import {
	getPosts,
	getPostById,
	createPost,
	updatePost,
	deletePost,
} from "../controllers/postController";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(getPosts));
router.get("/:id", asyncHandler(getPostById));
router.post("/", asyncHandler(createPost));
router.put("/:id", asyncHandler(updatePost));
router.delete("/:id", asyncHandler(deletePost));

export default router;
