const mongoose = require("mongoose");
// const Schema = mongoose.Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    groupId: {
        type: String,
        maxlength: 32
    },

}, { timestamps: true });
module.exports = mongoose.model("user", userSchema);