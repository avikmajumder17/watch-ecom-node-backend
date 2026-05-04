const Watch = require("../models/watchModel");



//get all watches

exports.getAllWatches = async (req, res) => {
    try {
        const queryObj = { ...req.query };
        excludedFields = ["page", "sort", "limit", "fields"];
        excludedFields.forEach(el => delete queryObj[el]);

        //

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        let query = Watch.find(JSON.parse(queryStr));

        //

        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        //

        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        //

        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 100;
        const skippedItems = (page - 1) * limit;

        query = query.skip(skippedItems).limit(limit);

        if (req.query.page) {
            const numWatches = await Watch.countDocuments();

            if (skip >= numWatches) throw new Error("This page does not exist");
        }

        // execute query

        const watches = await query;

        res.status(200).json({
            status: "Success",
            results: watches.length,
            data: {
                watches
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

// get watch

exports.getWatch = async (req, res) => {
    try {
        const watch = await Watch.findById(req.params.id);

        res.status(200).json({
            status: "Success",
            data: {
                watch
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

// create watch

exports.createWatch = async (req, res) => {
    try {
        const newWatch = await Watch.create(req.body);

        res.status(201).json({
            status: "Success",
            data: {
                watch: newWatch
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

// update watch

exports.updateWatch = async (req, res) => {
    try {
        const watch = await Watch.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "Success",
            data: {
                watch
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err
        });
    }
};

// delete watch

exports.deleteWatch = async (req, res) => {
    try {
        await Watch.findByIdAndDelete(req.params.id);

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