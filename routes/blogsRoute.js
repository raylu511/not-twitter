const express = require("express");
const BlogsController = require("../controllers/blogsController");
const router = express.Router();

router.get("/", BlogsController.getBlogs);

router.get("/:id", BlogsController.getSingleBlog);

router.post("/", BlogsController.createBlog);

router.put("/:id", BlogsController.updateBlog);

router.delete("/:id", BlogsController.deleteBlog);

module.exports = router;
