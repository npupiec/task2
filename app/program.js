process.stdin.setEncoding('utf-8');

var os = require('os');
var OSinfo = require('../modules/OSinfo');
var time = require('../modules/time');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
       switched(input);
    }
});

function switched(input) {
    var instruction = input.trim();

    switch (instruction) {
        case 'info':
            process.stdout.write(process.versions.node);
            process.stdout.write(process.env.lang);
            process.exit();
            break;
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