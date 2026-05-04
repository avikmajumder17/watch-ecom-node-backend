const express = require("express");

const blogCategoryController = require("../controllers/blogCategoryController");

const router = express.Router();



router
    .route("/")
    .get(blogCategoryController.getAllBlogCategories)
    .post(blogCategoryController.createBlogCategory);

router
    .route("/:id")
    .get(blogCategoryController.getCategory)
    .patch(blogCategoryController.updateCategory)
    .delete(blogCategoryController.deleteCategory);



module.exports = router;