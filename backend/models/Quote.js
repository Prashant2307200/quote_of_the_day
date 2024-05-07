const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Quote",quoteSchema)