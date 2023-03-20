/*
*   HTTP Transit
*/
//  define dependencies
const https = require('https');

var httpTransit = {
    run: run
};

async function call(query) {

    return new Promise(function(resolve, reject) {
        https.get(query.url, (resp) => {

            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
              data += chunk;
            });
          
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
              resolve(data);
            });
            
          }).on("error", (err) => {
              reject("Error: " + err.message);
          });
    });
}

async function run(allQueries) {
    //  define local variables
    var allPromises = [];
    var allStats = [];

    //iterate over queries
    allQueries.forEach(function(query) {

        console.log(query);

        allPromises.push(call(query))

    });

    
    try {
        var allStats = await Promise.all(allPromises);
        return allStats
    } catch (error) {
        console.log('error:', error);
    }

}

module.exports = httpTransit;