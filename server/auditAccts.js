/*
*   Accounts Audit
*/

//  DEFINE DEPENDENCIES
const accountsLoader    = require('../server/accountsLoader');
const queryBuilder      = require('../server/queryBuilder');
const httpTransit       = require('../server/httpTransit');
const sqlBuilder        = require('../server/sqlBuilder');

async function run() {

    try {
        //  DEFINE LOCAL VARIABLES
        const allAccts      = accountsLoader.loadAccts(["allAccts.json"]);
        const allQueries    = queryBuilder.buildAll(allAccts);
        const audStats      = await httpTransit.run(allQueries);
        const sqlQuery      = sqlBuilder.insert(audStats, allAccts);

        recordResults(sqlQuery);
    } catch (error) {
        console.log('audit accts error', error);
    }
    
}


/*
*   Record Results
*/
function recordResults(audStats) {
    //  notify progress
    console.log("recording results", audStats);
}

run();
