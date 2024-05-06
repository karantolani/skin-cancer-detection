const User = require("../models/userModel");
const ResultMap = require("../models/resultMapModel");
const {generateJwtToken} = require("../services/auth");
const {join, dirname} = require("path");
const {readFileSync, createReadStream} = require("fs");
const axios = require("axios");
const fs = require("fs");
const { uuid } = require('uuidv4');

const FLASK_SERVER_ENDPOINT = "http://localhost:5000/predict";

async function handleSignUp(req, res) {
    if (!req.body.name || !req.body.email || !req.body.password)
        return res.status(400).json({
            error: "Please fill out all the fields!"
        });

    const existingUser = await User.findOne({email: req.body.email});

    if (existingUser)
        return res.status(400).json({
            error: "User with this email id already exists!"
        })

    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    const token = generateJwtToken(newUser);

    if (token) {
        res.cookie('token', token, {
            path: "/",
            expires: new Date(Date.now() + (24 * 7) * 3600000) // expires in 7 days
        })
        return res.status(201).json({
            'msg': "Success"
        })
    }

    return res.status(500).json({
        error: "Something went wrong"
    });
}

async function handleLogin(req, res) {
    if (!req.body.email || !req.body.password)
        return res.status(400).json({
            error: "Please fill out all the fields!"
        });

    const existingUser = await User.findOne({email: req.body.email});

    if (existingUser) {
        if (existingUser.password === req.body.password) {
            const token = generateJwtToken(existingUser);

            if (token) {
                res.cookie('token', token, {
                    path: "/",
                    expires: new Date(Date.now() + (24 * 7) * 3600000) // expires in 7 days
                })
                return res.status(201).json({
                    'msg': "Success"
                })
            }

            return res.status(500).json({
                error: "Something went wrong"
            });
        }
    }

    return res.status(400).json({
        error: "Invalid email or password!"
    });

}

async function handleAuthenticate(req, res) {
    const user = await User.findById(req.userId);

    return res.status(200).json({
        msg: "Authenticated",
        _id: user._id,
        name: user.name,
        email: user.email
    });

}

async function handleTakeTest(req, res) {
    const filePath = join(dirname(__dirname) + '/uploads/' + req.file.filename);

    const response = await axios.post(FLASK_SERVER_ENDPOINT, {
        image: createReadStream(filePath)
    }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    if (response.status === 200) {
        const prediction = response.data;

        const doc = await User.findByIdAndUpdate(req.userId, {
            image: readFileSync(filePath),
            imageType: req.file.mimetype,
            resultPredictedClass: prediction.predicted_class,
            resultPredictedProb: prediction.prediction_probability
        });

        return res.status(200).json({
            msg: "Success"
        });
    }

    return res.status(500).json({
        'msg': "Something went wrong"
    });

}

async function handleTestResults(req, res) {
    const doc = await User.findById(req.userId);

    return res.status(200).json({
        image: doc.image && doc.image.toString('base64'),
        imageType: doc.imageType,
        prediction: doc.resultPredictedClass,
        predictionConfidence: doc.resultPredictedProb
    })
}

async function handleSharedTestResults(req, res) {
    const key = req.params.key;

    const result = await ResultMap.findOne({key});

    if (result) {

        const doc = await User.findById(result.userId);

        return res.status(200).json({
            image: doc.image && doc.image.toString('base64'),
            imageType: doc.imageType,
            prediction: doc.resultPredictedClass,
            predictionConfidence: doc.resultPredictedProb
        })
    }

    return res.status(400).json({
        error: "Invalid Key"
    });
}

async function handleShareResults(req, res) {
    const map = await ResultMap.create({
        key: uuid(),
        userId: req.userId
    });

    return res.status(200).json({
        path: `/${map.key}`
    })

}

function handleLogout(req, res) {
    res.clearCookie('token');

    return res.status(200)
        .json({
            "msg": "Success"
        });
}

module.exports = {
    handleSignUp,
    handleLogin,
    handleAuthenticate,
    handleTakeTest,
    handleLogout,
    handleTestResults,
    handleSharedTestResults,
    handleShareResults
};