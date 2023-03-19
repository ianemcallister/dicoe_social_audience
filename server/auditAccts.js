/*
*   Accounts Audit
*/

//  DEFINE DEPENDENCIES
const accountsLoader    = require('../server/accountsLoader');
const queryBuilder      = require('../server/queryBuilder');
const httpTransit       = require('../server/httpTransit');

//  DEFINE LOCAL VARIABLES
const allAccts      = accountsLoader.loadAccts(["NGLmitu_social_accts.json"]);
const allQueries    = queryBuilder.buildAll(allAccts);
const audStats      = httpTransit.run(allQueries);
recordResults(audStats);

/*
*   Record Results
*/
function recordResults(audStats) {
    //  notify progress
    console.log("recording results");
}

