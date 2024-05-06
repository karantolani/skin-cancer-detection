const express = require("express");
const PORT = 8080;
const cors = require("cors");
const indexRouter = require("./routes/indexRoute")
const connectToMongoDB = require("./dbConnection");
const cookieParser = require("cookie-parser");

const app = express();

const DB_URL = 'mongodb://localhost:27017/skin-cancer-detection';

connectToMongoDB(DB_URL)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.log("Error while connecting to MongoDB:", err));

app.use(express.json())
app.use(cors({credentials: true, origin: true}))
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use("/", indexRouter);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})