const mongoose = require("mongoose");

const watchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required"],
        unique: true
    },
    price: {
        type: Number,
        required: [true, "A price is required"]
    },
    image: String,
    rating: {
        type: Number,
        default: 4.2
    },
    manufacturer: {
        type: String,
        required: [true, "A manufacturer is required"]
    },
    color: {
        type: String,
        required: [true, "A color is required"]
    },
    best_seller: {
        type: Boolean,
        default: false
    },
    size: {
        type: Number,
        required: [true, "A size is required"]
    },
    description: {
        type: String,
        trim: true
    },
    reviews: Number,
    createdAt: {
        type: Date,
        default: new Date(),
        select: false
    }
});



const Watch = mongoose.model("Watch", watchSchema);

module.exports = Watch;