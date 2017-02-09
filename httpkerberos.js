var pems = require('intel-cacerts').list;
var intcCerts = require('intcCerts');
var PythonShell = require('python-shell');
/**
* http get
 */
module.exports = {
    get: function(options, result) {


        var opts = {
            mode: 'json',
            //   pythonPath: 'path/to/python',
            //   pythonOptions: ['-u'],
            scriptPath: '.\\node_modules\\httpkerberos',
            args: [options.url]
        };
        var pyshell = new PythonShell('run.py', opts);
        var output = '';
        pyshell.send('start');

        pyshell.on('message', function(message) {
            // received a message sent from the Python script (a simple "print" statement)
            output = message;
        });

        // end the input stream and allow the process to exit
        pyshell.end(function(err) {
            if (err) console.error(err);
            console.log('finished');
            result(err,output);
        });

    }
};
