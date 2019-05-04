const keys = require("./keys");
const fs = require("fs");
const axios = require("axios");
const isToday =require("date-fns");

function concerts(input) {
    const artist = input;
    const url = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=" + artist +keys.ticketmaster.id;

    axios.get(url).then(
        function(response) {
            for (const i = 0; i < response.data.length; i++){
                console.log("Concert Time: " + isToday(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
                console.log("Concert Location: " + response.data[i].venue.city);
                console.log("Concert Venue: " + response.data[i].venue.name);
                console.log('--------------------------------------------------')
                fs.appendFileSync('log.txt', "\r\n" + "Concert Search Log----------------------" + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Venue Name: " + response.data[i].venue.name + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Venue Location: " + response.data[i].venue.city + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "Venue Time: " + isToday(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A') + "\r\n", 'utf8');
                fs.appendFileSync('log.txt', "\r\n" + "-----------------------------------------"+ "\r\n", 'utf8'); 
            }
        }
    );
};
module.exports = concerts;