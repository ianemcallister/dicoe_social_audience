/*
*   TOKEN EXTENSION
*/

// DEFINE DEPENDENCIES
const https = require("https");


// DEFINE LOCAL VARIABLES
user_id = "10110087163874565";
access_token = "EAADLy9zPL00BAN2woFDLS3PGZBlNQs3dIWJ3AATvFkg4lWFarzddq6ymvZAEf0dQEV3zKgHXYZB66zEJ1ZBv5DhPj4kyjrqTNotW3ZB1S0xXoPv5U5rH6R5Goz820mYyezzEIkpLQMfhimBJmzUUbqYlkMvXeZC55dbFqswIUybwZDZD";
var url = "https://graph.facebook.com/v16.0/me/accounts?fields=id%2Cname%2Caccess_token%2Cinstagram_business_account&access_token=";
url = url + access_token; 

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
                var newObject = JSON.parse(data, 'utf8')
                console.log(newObject.data);
            });
            
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    
    } catch (error) {
        console.log('error:', error);
    }
};

run();