const express = require("express");
const blogTagController = require("../controllers/blogTagController");

const router = express.Router();



router
    .route("/")
    .get(blogTagController.getAllBlogTags)
    .post(blogTagController.createBlogTag);


router
    .route("/:id")
    .get(blogTagController.getBlogTag)
    .patch(blogTagController.updateBlogTag)
    .delete(blogTagController.deleteBlogTag);



module.exports = router;