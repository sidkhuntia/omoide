import express from "express";
//prettier-ignore
import { getPosts, createPost, updatePost, deletePost, likePost} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.patch("/:id/like", auth, likePost);
router.delete("/:id", auth, deletePost);

export default router;
