const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const imageUpload = require('./imageUpload.js')

global.__basedir = __dirname;

const app = express();

var corsOptions = {
    origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

app.post('/api/file', imageUpload.uploadFile().any('file'), (req, res, next) => {
    if (req.files) {
        console.log(req.files[0]);
    }
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
