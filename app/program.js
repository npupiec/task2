process.stdin.setEncoding('utf-8');

var os = require('os');
var OSinfo = require('../modules/OSinfo');
var time = require('../modules/time');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case 'ver':
                process.stdout.write(process.versions.node);
                process.exit();
                break;
            case 'lang':
                process.stdout.write(process.env.lang);
                process.exit();
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '/time':
                time.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});