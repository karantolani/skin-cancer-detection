const mongoose = require("mongoose");

const resultMapSchema = new mongoose.Schema({
    key: {
        unique: true,
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const ResultMap = mongoose.model('resultMap', resultMapSchema);

module.exports = ResultMap;