const mongoose = require("mongoose");
// const Schema = mongoose.Schema
const messagesSchema = new mongoose.Schema({

    groupId: {
        type: String,
        maxlength: 32
    },
    userId: {
        type: String,
        maxlength: 32
    },
    messages: {
        type: String,
        maxlength: 32
    },
    unread: {
        type: Number,
        default: 0,
    },

}, { timestamps: true });
module.exports = mongoose.model("messages", messagesSchema);