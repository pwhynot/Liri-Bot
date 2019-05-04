require("dotenv").config();

const fs = require("fs");

const keys = require("./keys");
const music = require("./spotify");
const concerts = require("./ticketmaster");
const movies = require("./omdb");

const userArgument = process.argv[2];
const input = process.argv.splice(3,process.argv.length).join(' ');

switch (userArgument) {
  case "search-music":
    music(input);
    break;
  case "search-movies":
    movies(input);
    break;
  case "search-concerts":
    concerts(input);
    break;
  case "feeling-lucky":
    feelingLucky();
    break;
  default:
    Err = "Please enter of the choices below" + "\r\n" + "\r\n" +
    "node liri.js search-music '<song name>' " + "\r\n" +
    "node liri.js search-movies '<movie name>' " + "\r\n" +
    "node liri.js search-concerts '<favorite artist>' " + "\r\n" +
    "node liri.js feeling-lucky" + "\r\n" + "\r\n" ; 
    console.log(Err)
};

function feelingLucky() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        const dataArr = data.split(",");
        if (dataArr[0] === "search-music"){
            const songCheck = dataArr[1].slice(1, -1);
            console.log("Song Check: "+songcheck)
            music(songCheck);
        } else if (dataArr[0] === "search-concerts"){
            const venueName = dataArr[1].slice(1, -1);
            console.log("Venue Name: "+venueName)
            concerts(venueName);
        } else if (dataArr[0] === "search-movies"){
            const movieName = dataArr[1].slice(1, -1);
            console.log("Movie Name: "+movieName)
            movies(movieName);
        }
    });
};