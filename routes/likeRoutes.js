const express = require("express");
//const BlogsController = require("../controllers/blogsController");
//const CommentsController = require("../controllers/commentsController");
const LikesController = require("../controllers/commentsController");
const router = express.Router();

router.get("/", LikesController.getLikes);

router.get("/blog/:id", LikesController.getLikesOfSingleBlog);

router.get("/comment/:id", LikesController.getLikesOfSingleComment);


router.post("/blog/:id", LikesController.createLikeOfBlog);

router.post("/comment/:id", LikesController.createLikeOfComment);


router.delete("/:id", LikesController.deleteLike);


module.exports = router;