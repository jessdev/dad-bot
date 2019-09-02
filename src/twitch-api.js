var axios = require('axios');
var auth = require('./auth.json');
const twitchApi = 'https://api.twitch.tv/helix/';
let authToken = "fuckall";

var users = {
    byLogin: function(loginName){
        return axios.get(twitchApi+'users?llogin='+loginName).catch(error =>{
            console.error(error);
        });
    }
}

var authentication = {
    getToken: function(){
        getRequest('https://id.twitch.tv/oauth2/token?client_id='+auth.twitch.ClientId
        + '&client_secret='+ auth.twitch.ClientSecret
        + '&grant_type=client_credentials'
        + '&scope=user:edit'
        );
    }
};

//testing

// users.byLogin("evilstickperson").then((response)=>{
//     console.log(response);
// });

getRequest('https://id.twitch.tv/oauth2/token?client_id='+auth.twitch.ClientId
+ '&client_secret='+ auth.twitch.ClientSecret
+ '&grant_type=client_credentials'
+ '&scope=user:edit'
).then((response)=>{
    console.log(response);
});

 function getRequest(url){
    return axios({
        method: 'GET',
        url: url,
    }).catch(error =>{
        console.log("FUCKKK");
        console.error(error);
    })
}