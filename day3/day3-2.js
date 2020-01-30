var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8').split('\n');
var wire1 = input[0].split(',');
var wire2 = input[1].split(',');
var lastX = 0;
var lastY = 0;
var coordinates1 = [{ x: 0, y: 0, totalDistance: 0 }]; //x,y
var coordinates2 = [{ x: 0, y: 0, totalDistance: 0 }];

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

//get index of intersection of wire1 and wire2?

coordinates1.forEach(value1 => {
    coordinates2.forEach(value2 => {
        if (value1.x == value2.x && value1.y == value2.y) {
            
            if((value1.totalDistance + value2.totalDistance) < closest)
            {
                closest = value1.totalDistance + value2.totalDistance;
            }
            
            console.log("Total distance: " + (value1.totalDistance + value2.totalDistance));
        }
    })
});

//Off by one error somewhere. This value is off by 3.
console.log("Closest total distance is: " + (closest));

function calculateDistance(coordinate) {
    if (coordinate.x >= 0) {
        xDistance = coordinate.x;
    }
    else {
        xDistance = Math.abs(coordinate.x);
    }
}

function walk(direction, length, coordinates) {
    var totalDistance = coordinates.length == 1 ? 
        0 : 
        coordinates[coordinates.length - 1].totalDistance + 1;
    
    for (var i = 1; i < length; i++) {
    
        lastX = coordinates[coordinates.length-1].x;
        lastY = coordinates[coordinates.length-1].y;

        totalDistance = totalDistance + 1;

        if (direction == 'U') {
            coordinates.push({ x: lastX, y: lastY + 1 , totalDistance: totalDistance});
        } else if (direction == 'D') {
            coordinates.push({ x: lastX, y: (lastY + -1), totalDistance: totalDistance});
        } else if (direction == 'L') {
            coordinates.push({ x: (lastX - 1), y: lastY, totalDistance: totalDistance });
        } else if (direction == 'R') {
            coordinates.push({ x: lastX + 1, y: lastY, totalDistance: totalDistance });
        } else {
            throw "Invalid direction: " + direction;
        }
    }
}
