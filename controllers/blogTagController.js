const BlogTag = require("../models/blogTagModel");



//get all blog tags

exports.getAllBlogTags = async (req, res) => {
    try {
        const blogTags = await BlogTag.find();

        res.status(200).json({
            status: "Success",
            data: {
                blogTags
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

//get blog tag

exports.getBlogTag = async (req, res) => {
    try {
        const blogTag = await BlogTag.findById(req.params.id);

        res.status(200).json({
            status: "Success",
            data: {
                blogTag
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

//create blog tag

exports.createBlogTag = async (req, res) => {
    try {
        const newBlogTag = await BlogTag.create(req.body);

        res.status(201).json({
            status: "Success",
            data: {
                blogTag: newBlogTag
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

//update blog tag

exports.updateBlogTag = async (req, res) => {
    try {
        const blogTag = await BlogTag.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "Success",
            data: {
                blogTag
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

//delete blog tag

exports.deleteBlogTag = async (req, res) => {
    try {
        await BlogTag.findByIdAndDelete();

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