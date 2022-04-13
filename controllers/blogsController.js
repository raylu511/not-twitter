const blogModel = require('../models/blogModel');

class BlogsController {
    static async getBlogs (req, res){
        const blogs = await blogModel.getBlogsFromDB()
        res.send(blogs)
    }
    static async getSingleBlog (req, res){
        const id = req.params.id;
        const blog = await blogModel.getSingleBlogFromDB(id)
        res.send(blog)
    }
    static async updateBlog (req, res){
        res.send('hello')

    }
    static async deleteBlog (req, res){
        res.send('hello')

    }
    static async createBlog (req, res){
        const {userId, body} = req.body;
        const newBlog = await blogModel.createBlogsFromDB(userId, body);
        return res.send(newBlog)
    }

}

module.exports = BlogsController