

//  define dependencies
var FB = require('fb');

//geting token

FB.api('oauth/access_token', {
    client_id: '224076443365197',
    client_secret: '38eb9f254a0404c1fb34dc944744977e',
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
 
    var accessToken = res.access_token;
    console.log('accessToken:', accessToken);

    FB.api('oauth/access_token', {
        client_id: '224076443365197',
        client_secret: '38eb9f254a0404c1fb34dc944744977e',
        redirect_uri: 'https://nglmitu-tiktok.herokuapp.com/',
        code: 'EAADLy9zPL00BAPxoWPePsfkbbFkySKs8qknQF7R8KZAZAK1F472AQ0icaUxFakZADttOdHMvePZBFz1sWsS6QTvRmbxURsFEuf2qZCGx5F7RsKrHVEhegrixOSHrs9VJPM0TWCz2DwtJ86raiATNZCYPBwu1ZBnMZAAGUpogGnaTSqWiSZAUhTsiE5antMYeRVEhrd4rWm3jBUzdleB068S68'
    }, function (res) {
        if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
     
        var accessToken = res.access_token;
        var expires = res.expires ? res.expires : 0;
        
        console.log('accessToken:', accessToken, expires);
    });
});