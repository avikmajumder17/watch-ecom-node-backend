const express = require("express");
const watchController = require("../controllers/watchController");

const router = express.Router();

router
    .route("/")
    .get(watchController.getAllWatches)
    .post(watchController.createWatch);

router
    .route("/:id")
    .get(watchController.getWatch)
    .patch(watchController.updateWatch)
    .delete(watchController.deleteWatch);



module.exports = router;