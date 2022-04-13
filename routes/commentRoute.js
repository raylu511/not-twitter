const express = require("express");
const commentsController = require("../controllers/commentsController");

const router = express.Router();

router.get("/", commentsController.getCommentsOfBlog);

//router.get("/:id", likesController.getSingleComment);

router.post("/", commentsController.createCommentOfBlog);

router.put("/:id", commentsController.editCommentOfBlog);

router.delete("/:id", commentsController.deleteCommentOfBlog);

module.exports = router;