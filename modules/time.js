
function time(num) {
    var minutes = Math.floor(num / 60) + 'min';
    var sec = Math.floor(num % 60) + 'sec';
    var h = Math.floor(num / 3600) + 'h';
    var m = Math.floor(num % 3600 / 60) + 'min';
    var s = Math.floor(num % 3600 % 60) + 'sec';

    return h + m + s;
}

console.log(time(3700))
exports.print = time;