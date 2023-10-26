const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;