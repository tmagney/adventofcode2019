//https://adventofcode.com/2019/day/1
var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8').split('\r\n');
var totalFuel = 0;

input.forEach((mass) => {
    var baseFuel = getFuel(mass);
    console.log("Base fuel: " + baseFuel);

    totalFuel = baseFuel + totalFuel;

    var extraFuel = baseFuel; 

    do{
        extraFuel = getFuel(extraFuel);
        console.log("Extra fuel: " + extraFuel);
        totalFuel = extraFuel + totalFuel;
    } while(extraFuel > 0)
});

console.log("Total fuel: " + totalFuel);

function getFuel(mass)
{
    var fuel = Math.floor(mass/3) - 2;
    return fuel >= 0 ? fuel : 0;
}