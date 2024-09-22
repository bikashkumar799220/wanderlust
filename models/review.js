// const { date } = require("joi");
const { ref, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: {
        type: String, // 'Comment' should be lowercase 'comment' for consistency
        required: true // Ensure that comments are required
    },
    rating: {
        type: Number,
        required: true, // Ensure rating is required
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now // Pass the function reference, not the result
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
       

    }
});

module.exports = mongoose.model("Review", reviewSchema);
