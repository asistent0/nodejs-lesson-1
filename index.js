var colors = require('colors/safe');

console.log(colors.green.bgWhite('hello')); // outputs green text
console.log(colors.red.underline.bgCyan('i like cake and pies')); // outputs red underlined text
console.log(colors.inverse.bgMagenta('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass


var beep = require('beepbeep');

beep();
// Beep!

beep(2);
// Beep! Beep!

beep(3, 1000);
// Beep! ... Beep! ... Beep!

beep([1000, 500, 2000]);
// 1 second delay...Beep! 0.5 second delay...Beep! 2 second delay...Beep!