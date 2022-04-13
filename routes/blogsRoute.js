const express = require("express");
const BlogsController = require("../controllers/blogsController");
const CommentsController = require("../controllers/commentsController");
const router = express.Router();

router.get("/", BlogsController.getBlogs);

router.get("/:id", BlogsController.getSingleBlog);

router.post("/", BlogsController.createBlog);

router.put("/:id", BlogsController.updateBlog);

router.delete("/:id", BlogsController.deleteBlog);

router.get("/:id/comments", CommentsController.getCommentsOfBlog);

router.post("/:id/comments", CommentsController.createCommentOfBlog);

module.exports = router;
