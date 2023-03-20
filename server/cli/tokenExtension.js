/*
*   TOKEN EXTENSION
*/

// DEFINE DEPENDENCIES
const https = require("https");


// DEFINE LOCAL VARIABLES
app_id = "224076443365197";
app_secret = "6992c2282add25958b2d8b322c6cec78";        //App Secret
access_token = "EAADLy9zPL00BAGegZCJS2ALfklS92OlW9t0x2CJUL2cxGkdShVSB9sWAPPQE7sThejyU7143wFbtzWo6EwgKSYLY1xPAZCcO1ZBaTuqZAj1qGdWngNS7GNcZBb8Ng875eymZB9qVkGQZBKaySoZB9vmKpLYGZA7jaVulZCWFnVuJSf9O6eGrSBX7zdjQjdG7sR0UmeafE2pygBoz36G33AMl5r";
var url = "https://graph.facebook.com/v16.0/oauth/access_token?";
url = url + "grant_type=fb_exchange_token";
url = url + "&client_id=" + app_id;
url = url + "&client_secret=" + app_secret; 
url = url + "&fb_exchange_token=" + access_token;

async function run() {


    try {
        https.get(url, (resp) => {

            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
              data += chunk;
            });
          
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
              console.log(data);
            });
            
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    
    } catch (error) {
        console.log('error:', error);
    }
};

run();