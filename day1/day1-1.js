//https://adventofcode.com/2019/day/1
var fs = require('fs');
 
var input = fs.readFileSync('input.txt', 'utf8').split('\r\n');

var totalFuel = 0;

input.forEach((mass) => {
    var fuel = 0;
    fuel = Math.floor(mass/3) - 2;

    console.log("Fuel: " + fuel);
    totalFuel = fuel + totalFuel;
});

console.log("Total fuel: " + totalFuel);
