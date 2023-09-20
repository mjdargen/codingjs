/** --- Solutions --- **/

let solutions = {};

solutions.pawn = function (x1, y1, x2, y2) {
    if (x1 !== x2) {
        return false;
    }
    if (y2 - y1 === 1) {
        return true;
    }
    else if (y1 === 2 && y2 > y1 && y2 - y1 < 3) {
        return true;
    }
    else {
        return false;
    }
};

solutions.rook = function (x1, y1, x2, y2) {
    if (x1 === x2 || y1 === y2) {
        return true;
    }
    else {
        return false;
    }
};

solutions.king = function (x1, y1, x2, y2) {
    if (Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1) {
        return true;
    }
    else {
        return false;
    }
};

solutions.bishop = function (x1, y1, x2, y2) {
    if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
        return true;
    }
    else {
        return false;
    }
};

solutions.queen = function (x1, y1, x2, y2) {
    if (Math.abs(x1 - x2) === Math.abs(y1 - y2) || x1 === x2 || y1 === y2) {
        return true;
    }
    else {
        return false;
    }
};

solutions.knight = function (x1, y1, x2, y2) {
    let dx = Math.abs(x1 - x2);
    let dy = Math.abs(y1 - y2);
    if (dx == 1 && dy == 2 || dx == 2 && dy == 1) {
        return true;
    }
    else {
        return false;
    }
};

module.exports = solutions;
