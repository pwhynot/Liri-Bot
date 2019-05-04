require("dotenv").config();

const fs = require("fs");

const keys = require("./keys");
const music = require("./spotify");
const concerts = require("./ticketmaster");
const movies = require("./omdb");

const userArgument = process.argv[2];
const input = process.argv.splice(3,process.argv.length).join(' ');

switch (userArgument) {
  case "spotify-this-song":
    music(input);
    break;
  case "movies-this":
    movies(input);
    break;
  case "concerts-this":
    concerts(input);
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    Err = "Please enter of the choices below" + "\r\n" + "\r\n" +
    "node liri.js spotify-this-song '<song name>' " + "\r\n" +
    "node liri.js movies-this '<movie name>' " + "\r\n" +
    "node liri.js concerts-this '<favorite artist>' " + "\r\n" +
    "node liri.js do-what-it-says" + "\r\n" + "\r\n" ; 
    console.log(Err)
};

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        const dataArr = data.split(",");
        if (dataArr[0] === "spotify-this-song"){
            const songCheck = dataArr[1].slice(1, -1);
            console.log("Song Check: "+songcheck)
            music(songCheck);
        } else if (dataArr[0] === "concerts-this"){
            const venueName = dataArr[1].slice(1, -1);
            console.log("Venue Name: "+venueName)
            concerts(venueName);
        } else if (dataArr[0] === "movie-this"){
            const movieName = dataArr[1].slice(1, -1);
            console.log("Movie Name: "+movieName)
            movies(movieName);
        }
    });
};