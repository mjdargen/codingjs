/** --- Solutions --- **/

let solutions = {};

solutions.leastDivisor = function (n) {
    let div = 2;
    while (n % div != 0) {
        div++;
    }
    return div;
};

solutions.powerTwo = function (n) {
    let two_in_power = 2;
    let power = 1;
    while (two_in_power <= n) {
        two_in_power *= 2;
        power++;
    }
    return power - 1;
};

module.exports = solutions;