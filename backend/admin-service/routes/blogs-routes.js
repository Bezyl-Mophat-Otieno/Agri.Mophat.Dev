import { Router } from "express";
import addBlog from "../controllers/blogs/add-blog.js";
import getAllBlogs from "../controllers/blogs/get-all-blogs.js";
import deleteBlog from "../controllers/blogs/delete-blog.js";
import getSingleBlog from "../controllers/blogs/get-single-blog.js";
import updateBlog from "../controllers/blogs/update-blog.js";
const blogRouter = Router();
blogRouter.post("/add", addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.delete("/delete/:id", deleteBlog);
blogRouter.get("/:id", getSingleBlog);
blogRouter.put("/update/:id", updateBlog);

export default blogRouter;
