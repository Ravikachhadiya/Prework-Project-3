let queen = {
    direction: 'S',
    position: [4, 0],
    whereabouts: []
};

function changeDirection(direction) {
    switch (direction) {
        case "N":
            queen.direction = 'N';
            console.log(queen.direction);
            break;
        case "S":
            queen.direction = 'S';
            console.log(queen.direction);
            break;
        case "E":
            queen.direction = 'E';
            console.log(queen.direction);
            break;
        case "W":
            queen.direction = 'W';
            console.log(queen.direction);
            break;
        case "NE":
            queen.direction = 'NE';
            console.log(queen.direction);
            break;
        case "NW":
            queen.direction = 'NW';
            console.log(queen.direction);
            break;
        case "SE":
            queen.direction = 'SE';
            console.log(queen.direction);
            break;
        case "SW":
            queen.direction = 'SW';
            console.log(queen.direction);
            break;
        default:
            break;

    }
}

function moveForward() {

    x = queen.position[0];
    y = queen.position[1];

    switch (queen.direction) {
        case "N":
            if (x != 0) {
                x -= 1;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "S":
            if (x != 7) {
                x += 1;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "E":
            if (y != 7) {
                y += 1;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "W":
            if (y != 0) {
                y -= 1;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "NE":
            if (x != 0 && y != 7) {
                x -= 1;
                y += 1;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "NW":
            if (x != 0 && y != 0) {
                x -= 1;
                y -= 1;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "SE":
            if (x != 7 && y != 7) {
                x += 1;
                y += 1;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "SW":
            if (x != 7 && y != 0) {
                x += 1;
                y -= 1;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        default:
            console.log("Don't try to move out!");
            break;
    }
}

function jumpMoveForward(steps) {

    x = queen.position[0];
    y = queen.position[1];

    switch (queen.direction) {
        case "N":
            if (x != 0 && (x - steps) >= 0) {
                x -= steps;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "S":
            if (x != 7 && (x + steps) <= 7) {
                x += steps;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "E":
            if (y != 7 && (y + steps) <= 7) {
                y += steps;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "W":
            if (y != 0 && (y - steps) >= 0) {
                y -= steps;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "NE":
            if (x != 0 && (x - steps) >= 0 && y != 7 && (y + steps) <= 7) {
                x -= steps;
                y += steps;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "NW":
            if (x != 0 && (x - steps) >= 0 && y != 0 && (y - steps) >= 0) {
                x -= steps;
                y -= steps;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "SE":
            if (x != 7 && (x + steps) <= 7 && y != 7 && (y + steps) <= 7) {
                x += steps;
                y += steps;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        case "SW":
            if (x != 7 && (x + steps) <= 7 && y != 0 && (y - steps) >= 0) {
                x += steps;
                y -= steps;
                queen.position = [x, y];
            }
            console.log(queen.direction);
            console.log(queen.position[0] + "" + queen.position[1]);
            break;
        default:
            console.log("Don't try to move out!");
            break;
    }
}

function updatePosition() {

    x = queen.position[0];
    y = queen.position[1];

    switch (x) {
        case 0:
            x = "a";
            break;
        case 1:
            x = "b";
            break;
        case 2:
            x = "c";
            break;
        case 3:
            x = "d";
            break;
        case 4:
            x = "e";
            break;
        case 5:
            x = "f";
            break;
        case 6:
            x = "g";
            break;
        case 7:
            x = "h";
            break;
        default:
            break;
    }

    current_position = x + y;
    whereabouts = [current_position];
}