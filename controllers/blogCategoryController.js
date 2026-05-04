const BlogCategory = require("../models/blogCategoryModel");



exports.getAllBlogCategories = async (req, res) => {
    try {
        const blogCategories = await BlogCategory.find();

        res.status(200).json({
            status: "Success",
            data: {
                blogCategories
            }
        });
    } catch (err) {   
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};


exports.getCategory = async (req, res) => {
    try {
        const blogCategory = await BlogCategory.findById(req.params.id);

        res.status(200).json({
            status: "Success",
            data: {
                blogCategory
            }
        });
    } catch (err) {   
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};


exports.createBlogCategory = async (req, res) => {
    try {
        const newBlogCategory = await BlogCategory.create(req.body);

        res.status(201).json({
            status: "Success",
            data: {
                blogCategory: newBlogCategory
            }
        });
    } catch (err) {   
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};


exports.updateCategory = async (req, res) => {
    try {
        const blogCategory = await BlogCategory.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "Success",
            data: {
                blogCategory
            }
        });
    } catch (err) {   
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};


exports.deleteCategory = async (req, res) => {
    try {
        await BlogCategory.findByIdAndDelete(req.params.id);

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