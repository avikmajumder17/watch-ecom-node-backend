const mongoose = require("mongoose");



const blogSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: [true, "A blog tag must have a tag"],
        trim: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
        select: false
    }
});



const BlogTag = mongoose.model("BlogTag", blogSchema);

module.exports = BlogTag;