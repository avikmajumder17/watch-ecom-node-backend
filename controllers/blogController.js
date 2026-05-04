const Blog = require("../models/blogModel");



//get all blogs

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json({
            status: "Success",
            data: {
                blogs
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

//get blog

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        res.status(200).json({
            status: "Success",
            data: {
                blog
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

//create blog

exports.createBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);

        res.status(201).json({
            status: "Success",
            data: {
                blog: newBlog
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

//update blog

exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "Success",
            data: {
                blog
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

//delete blog

exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelet(req.params.id);

        res.status(204).json({
            status: "Success",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};