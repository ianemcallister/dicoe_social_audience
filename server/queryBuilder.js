/*
*   Query Builder
*/


var queryBuilder = {
    buildAll: buildAll
};

function buildAll(allAccts) {
    //  define local variables
    var allCalls = [];

    //  iterate over objects
    allAccts.forEach(function(acct) {
        
        //define local variables
        var url = "";

        switch(acct.platform) {
            case "instagram":
                url = url + "https://graph.facebook.com/v16.0/" + acct.account_id;
                url = url + "?fields=followers_count,username,id&access_token=" + acct.access_token;
                allCalls.push({type: "GET", url: url})
                break;
            case "facebook":
                url = url + "https://graph.facebook.com/v16.0/" + acct.account_id;
                url = url + "?fields=followers_count,username,id&access_token=" + acct.access_token;
                allCalls.push({type: "GET", url: url})
                break;
            default:
                break;
        }
    });
    

    return allCalls;
}

module.exports = queryBuilder;