import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";
const config = {
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': '68b87ad03fmsh6ef4e0597ce7701p12fbb4jsncc5c1346b6f7',
    },
};


app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL, config);
        const response = result.data;
        res.render("index", {secret: response.value, icon: response.icon_url});
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
