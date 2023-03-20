/*
*   Accounts Loader
*/
//  define dependencies
const fs        = require('fs');
const path      = require('path');

var accountsLoader = {
    loadAccts: loadAccts
};

function loadAccts(tablesList) {
    //  define local variables
    var allFiles = [];
    var allAccts = [];

    //  ITERATE OVER LIST
    tablesList.forEach(function(file) {
        //  NOTIFY PROGRESS
        console.log(file);
        allFiles.push(JSON.parse(fs.readFileSync(path.join(__dirname, "/secrets/", file), 'utf8')));
    });

    //  iterate over files
    allFiles.forEach(function(file) {

        //  iterate over records
        Object.keys(file).forEach(function(key) {
            allAccts.push({ account_id: key, access_token: file[key].access_token, platform: file[key].platform})
        });

    });
    

    return allAccts;
}

module.exports = accountsLoader;