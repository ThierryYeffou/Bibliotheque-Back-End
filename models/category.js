const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    wording: String
});

module.exports = mongoose.model("Category", categorySchema);