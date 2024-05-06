const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verifiedAccount: {
        type: Boolean,
        default: false
    },
    image: Buffer,
    imageType: String,
    resultPredictedClass: String,
    resultPredictedProb: String
}, {timestamps: true});

const User = mongoose.model('user', userSchema);

module.exports = User;