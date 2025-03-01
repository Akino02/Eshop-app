const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
});

module.exports = mongoose.model("Product", schema);