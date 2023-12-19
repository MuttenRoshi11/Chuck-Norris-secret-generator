import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// Creating app object with express as well as API URL and config object with API key
const app = express();
const port = 3000;
const API_URL = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random"
const config = { 
    headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': '68b87ad03fmsh6ef4e0597ce7701p12fbb4jsncc5c1346b6f7',
}};

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

// Creating GET request to render homepage and axios GET request to generate random Chuck Norris secret
app.get("/", (req, res) => {

    res.sendFile("c:/Users/Armin/Desktop/Training/Web Dev training/BackEnd/Chuck Norris API/index.html");
});

app.get("/random", async (req, res) => {
    const result = await axios.get(API_URL, config);
    const response = result.data;
    res.render("index.ejs", {secret: response.value, icon: response.icon_url});
});

// Created listening port
app.listen(port, () => {
    console.log("Listening on port " + port);
});