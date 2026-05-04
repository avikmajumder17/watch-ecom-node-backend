const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A blog must have a title"],
        unique: true
    },
    slug: String,
    img: String,
    date: {
        type: Date,
        default: new Date()
    },
    description: {
        type: String,
        required: [true, "A blog must have a description"],
        trim: true
    }
});



const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;