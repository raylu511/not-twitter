const blogModel = require("../models/blogModel");

class BlogsController {
  static async getBlogs(req, res) {
    const blogs = await blogModel.getBlogsFromDB();
    res.send(blogs);
  }
  static async getSingleBlog(req, res) {
    const id = req.params.id;
    const blog = await blogModel.getSingleBlogFromDB(id);
    res.send(blog);
  }
  
  static async updateBlog(req, res) {
    const id = req.params.id;
    const { body } = req.body;
    const updatedBlog = await blogModel.updateBlogFromDB(id, body);
    if (updatedBlog.length === 0) {
        return res.status(404).send("Blog not found");
      } else {
        return res.status(200).send(updatedBlog[0]);
      }
  }

  static async deleteBlog(req, res) {
    const id = req.params.id;
    const deletedBlog = await blogModel.deleteBlogFromDB(id);
    if (deletedBlog.length === 0) {
      return res.status(404).send("Blog not found");
    } else {
      return res.status(200).send(deletedBlog[0]);
    }
  }
  static async createBlog(req, res) {
    const { userId, body } = req.body;
    const newBlog = await blogModel.createBlogsFromDB(userId, body);
    return res.send(newBlog);
  }
}

module.exports = BlogsController;
