var should = require('chai').should(),
    httpkerberos = require('../httpkerberos');

var options = {
    url: "https://cloudhelper-api.app.intel.com/v1/accounts/complete",
    username: '',
    password: '',
    workstation: '',
    domain: ''
};
//console.log(options);
var timeout = 20000;
describe('#get', function() {
    this.timeout(timeout);
    
    it('Test', function(done) {
        httpkerberos.get(options, function(err, result) {
            setTimeout(done, timeout);
            if (err) {
                console.log("err: " + err);
                // done();
                // throw err;
                
            }
            console.log(result);
            done();
        });
    });

});

