const mongoose = require("mongoose");
// const Schema = mongoose.Schema
const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true, // Enforce uniqueness
        maxlength: 32
    },
}, { timestamps: true });
module.exports = mongoose.model("group", GroupSchema);