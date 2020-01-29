var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8').split(',').map(value => parseInt(value));

// replace position 1 with 12
// replace position 2 with 2
input [1] = 12;
input [2] = 2;

var pointer = 0; //starting position 0;
var operation = input[0];

while(operation != 99)
{
    var value1 = input[input[pointer+1]];
    var value2 = input[input[pointer+2]];
    var result = doOperation(operation, value1, value2)
    input[input[pointer+3]] = result;
    pointer = pointer + 4;
    operation = input[pointer];
}

console.log("Result: " + input[0]);

function doOperation(operation, value1, value2)
{
    var result = 0;

    if(operation != 1 && operation != 2)
    {
        throw "Invalid operation + " + operation;
    }

    if(operation == 1)
    {
        result = value1 + value2;
    } else
    {
        result = value1 * value2;
    }

    return result;
} 

