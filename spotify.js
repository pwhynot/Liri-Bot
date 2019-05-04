const Spotify = require('node-spotify-api');
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");

function music(input) {
    const song = input;
    if (!song) {
        song = "blown away Tech N9ne"
    }
    spotify.search({type: 'track', query: song}, function(err, data){
        if (err) {
            return console.log('Error occured: ' + err);
        }
        console.log("\n---------------------\nSong Name: " + data.tracks.items[0].name);
        console.log("Artist(s) Name: "+ data.tracks.items[0].artists[0].name);
        console.log("Album Name: "+ data.tracks.items[0].album.name);
        console.log("Preview URL: " + data.tracks.items[0].preview_url+"\n---------------\n");

        fs.appendFileSync('log.txt', "\r\n" + "Song Search Log---------------------------------------"+ "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Song Name: " + data.tracks.items[0].name + "\r\n", 'utf8' );
        fs.appendFileSync('log.txt', "\r\n" + "Artist(s): " + data.tracks.items[0].artists[0].name + "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Album: " + data.tracks.items[0].album.name+ "\r\n", 'utf8');
        fs.appendFileSync('log.txt', "\r\n" + "Preview Link: " + data.tracks.items[0].preview_url + "\r\n", 'utf8' );
        fs.appendFileSync('log.txt', "\r\n" + "-------------------------------------------------------"+ "\r\n", 'utf8');
    });
};
module.exports = music;