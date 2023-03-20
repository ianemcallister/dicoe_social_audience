/*
*   HTTP Transit
*/
//  define dependencies


var sqlBuilder = {
    insert: insert
};

function insert(audStats, allAccts) {
    // notify progress
    console.log('allAccts', allAccts);

    //  define local variables
    
    var timestamp = new Date();
    var returnString = "INSERT INTO `warm-aegis-141209.mitu_ngl.audience_over_time` (timestamp, platform, account_id, account_handle, audience_snapshot) \nVALUES \n";
    var recordsCount = audStats.length;

    //  iterate over list
    for(var i = 0; i < recordsCount; i++) {
        var record = JSON.parse(audStats[i]);
        var platform = "";
        //notify progress
        console.log(record, record.followers_count);

        //  iterate over allAccts
        allAccts.forEach(function(acct) {
            if(acct.account_id == record.id) platform = acct.platform;
        });

        //("2023-03-13T08:44:15-07:00", "instagram", '17841400440104458', "hispanicizeevent", 24064),
        returnString = returnString + "(\"" + timestamp.toISOString() + "\", \"";
        returnString = returnString + platform + "\", \"";
        returnString = returnString + record.id + "\", \"";
        returnString = returnString + record.username + "\", ";
        returnString = returnString + record.followers_count + ")";
        if(i < recordsCount-1) returnString = returnString + ", \n";
    }

    //  return
    return returnString;
};

module.exports = sqlBuilder;