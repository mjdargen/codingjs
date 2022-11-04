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

solutions.morningJog = function (x, y) {
    let i = 1;  // days
    while (x < y) {
        x *= 1.1; // x = x * 1.1;
        i++;  // i = i + 1
    }
    return i;
};

solutions.sumCubes = function (n) {
    let res = 0;
    for (let i = 1; i < n + 1; i++) {
        res += i ** 3;
    }
    return res;
};

solutions.factorial = function (n) {
    let fac = 1;
    for (let i = 1; i < n + 1; i++) {
        fac *= i;
    }
    return fac;
};

solutions.addingFactorials = function (n) {
    let partialFactorial = 1;
    let partialSum = 0;
    for (let i = 1; i < n + 1; i++) {
        partialFactorial *= i;
        partialSum += partialFactorial;
    }
    return partialSum;
};

solutions.primes = function (n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true;
};

module.exports = solutions;