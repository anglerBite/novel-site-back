const mongoose = require('mongoose');
const { Schema } = mongoose;

const novelSchema = new Schema ({
    title: {
        type: String,
    },
    index: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("novel", novelSchema);