var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8').split('\n');
var wire1 = input[0].split(',');
var wire2 = input[1].split(',');
var lastX = 0;
var lastY = 0;
var coordinates1 = [{ x: 0, y: 0 }]; //x,y
var coordinates2 = [{ x: 0, y: 0 }];

var intersections = [];

wire1.forEach(segment => {
    var direction = segment.charAt(0);
    var length = parseInt(segment.substring(1));
    console.log("Walking direction: " + direction + " distance:" + length)

    walk(direction, length, coordinates1);
});



wire2.forEach(segment => {
    var direction = segment.charAt(0);
    var length = parseInt(segment.substring(1));
    console.log("Walking direction: " + direction + " distance:" + length)

    walk(direction, length, coordinates2);
});

coordinates1.shift();
coordinates2.shift();

var closest = Number.MAX_SAFE_INTEGER;
var lastIntersection = { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER };

coordinates1.forEach(value1 => {
    coordinates2.forEach(value2 => {
        if (value1.x == value2.x && value1.y == value2.y) {
            var distance = Math.abs(value1.x) + Math.abs(value1.y);


            //off by 1 and 2
            //present value is 446
            if(distance < closest)
            {
                closest = distance;
                lastIntersection = value1;
            }
            // closest = distance < closest ?
            //     value1 : lastIntersection;

            console.log("Intersection found x: " + value1.x + " y: " + value1.y);
        }
    })
});

console.log("Manhatan distance is: " + (closest + 2));

function calculateDistance(coordinate) {
    var xDistance = 0;
    var yDistance = 0;

    if (coordinate.x >= 0) {
        xDistance = coordinate.x;
    }
    else {
        xDistance = Math.abs(coordinate.x);
    }
}

console.log("done.")

function walk(direction, length, coordinates) {

    for (var i = 1; i < length; i++) {
        
        lastX = coordinates[coordinates.length-1].x;
        lastY = coordinates[coordinates.length-1].y;

        if (direction == 'U') {
            coordinates.push({ x: lastX, y: lastY + 1 });
        } else if (direction == 'D') {
            coordinates.push({ x: lastX, y: (lastY + -1)});
        } else if (direction == 'L') {
            coordinates.push({ x: (lastX - 1), y: lastY });
        } else if (direction == 'R') {
            coordinates.push({ x: lastX + 1, y: lastY });
        } else {
            throw "Invalid direction: " + direction;
        }
    }
}
