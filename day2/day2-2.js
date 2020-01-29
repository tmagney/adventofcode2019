var fs = require("fs");

var originalInput = fs
  .readFileSync("input.txt", "utf8")
  .split(",")
  .map(value => parseInt(value));

var expected = 19690720;

var input = [];

execute();

console.log(
  "Result: " + input[0] + " noun: " + input[1] + " verb: " + input[2]
);

function execute() {
  for (var noun = 0; noun < 100; noun++) {
    for (var verb = 0; verb < 100; verb++) {
      //reset;

      input = originalInput.slice();

      var operation = input[0];

      var pointer = 0; //starting position 0;

      input[1] = noun;

      input[2] = verb;

      while (operation != 99) {
        var value1 = input[input[pointer + 1]];

        var value2 = input[input[pointer + 2]];

        var result = doOperation(operation, value1, value2);

        input[input[pointer + 3]] = result;

        pointer = pointer + 4;

        operation = input[pointer];
      }

      if (input[0] == expected) {
        return;
      }
    }
  }
}

function doOperation(operation, value1, value2) {
  var result = 0;

  if (operation != 1 && operation != 2) {
    throw "Invalid operation + " + operation;
  }

  if (operation == 1) {
    result = value1 + value2;
  } else {
    result = value1 * value2;
  }

  return result;
}
