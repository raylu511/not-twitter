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
    static updateBlog (){
        
    }
    static deleteBlogs (){
        
    }
    static createBlogs (){
        
    }

}

module.export = BlogsController