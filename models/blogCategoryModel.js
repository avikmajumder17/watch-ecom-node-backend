const mongoose = require("mongoose");



const blogCategoryShema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "A blog category must have a category"],
        trim: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
        select: false
    }
});



const BlogCategory = mongoose.model("BlogCategory", blogCategoryShema);

module.exports = BlogCategory;