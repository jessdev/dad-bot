var axios = require('axios');
var auth = require('./auth.json');
const twitchApi = 'https://api.twitch.tv/helix/';
let authToken = "fuckall";

var users = {
    byLogin: function (loginName) {
        return axios.get(twitchApi + 'users?llogin=' + loginName).catch(error => {
            console.error(error);
        });
    }
}

var authentication = {
    getToken: function () {
        getRequest('https://id.twitch.tv/oauth2/token?client_id=' + auth.twitch.ClientId
            + '&client_secret=' + auth.twitch.ClientSecret
            + '&grant_type=client_credentials'
            + '&scope=user:edit'
        );
    }
};

//testing

// users.byLogin("evilstickperson").then((response)=>{
//     console.log(response);
// });

// getRequest('https://id.twitch.tv/oauth2/token?client_id='+auth.twitch.ClientId
// + '&client_secret='+ auth.twitch.ClientSecret
// + '&grant_type=client_credentials'
// + '&scope=user:edit'
// ).then((response)=>{
//     console.log(response);
// });

var client = axios.create({
    baseUrl: "",
    headers: { 'Client-ID': auth.twitch.ClientId }
});

var topStreams = [];

client.get('https://api.twitch.tv/helix/streams?game_id=33214').then((response) => {
    topStreams = response.data.data;
    var list = [];
    for(var i = 0; i<5; i++){
        list.push({name: topStreams[i].title, img: topStreams[i].thumbnail_url});
    }
    topStreams = list;
}).catch(error => {
    console.error(error);
    console.error("Error occured at url: " + url)
});

function getRequest(url) {
    return axios({
        method: 'GET',
        url: url,
    }).catch(error => {
        console.error(error);
        console.error("Error occured at url: " + url)
    });
}

function getTop5Streams(){
    var list = [];
    for(var i = 0; i<5; i++){
        list.push({name: topStreams[i].title, img: topStreams[i].thumbnail_url});
    }
}

module.exports = {
    topStreams: topStreams,
    getTop5Streams: getTop5Streams
};
