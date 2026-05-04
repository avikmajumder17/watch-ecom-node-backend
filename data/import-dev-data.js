const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");
// const Watch = require("../models/watchModel");
// const Blog = require("../models/blogModel");
// const BlogTag = require("../models/blogTagModel");
const BlogCategory = require("../models/blogCategoryModel");

dotenv.config({ path: "./config.env" });


const DB = process.env.DATABASE.replace("<DATABASE_PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, { dbName: "watch" })
    .then(() => "Database connection is established")
    .catch(err => console.log("Database connection can not be established", err));



// const watches = JSON.parse(fs.readFileSync(`${__dirname}/watch.json`, "utf-8"));
// const blogs = JSON.parse(fs.readFileSync(`${__dirname}/blog.json`, "utf-8"));
// const blogsTags = JSON.parse(fs.readFileSync(`${__dirname}/blogTag.json`, "utf-8"));
const blogsCategory = JSON.parse(fs.readFileSync(`${__dirname}/blogCategory.json`, "utf-8"));

//import data

const importData = async () => {
    try {
        // await Watch.create(watches);
        // await Blog.create(blogs);
        // await BlogTag.create(blogsTags);
        await BlogCategory.create(blogsCategory);

        console.log("Data successfully loaded!");
    } catch (err) {
        console.log(err);
    }

    process.exit();
};

//delete data

const deleteData = async () => {
    try {
        // await Watch.deleteMany();
        // await Blog.deleteMany();
        // await BlogTag.deleteMany();
        await BlogCategory.deleteMany();

        console.log("Data successfully deleted!");
    } catch (err) {
        console.log(err);
    }

    process.exit();
};

if (process.argv[2] == "--import") {
    importData();
} else if (process.argv[2] == "--delete") {
    deleteData();
}



console.log(process.argv);