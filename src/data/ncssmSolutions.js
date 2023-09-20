/** --- Solutions --- **/

let solutions = {};

/* Module 4.1: Types, Variables, I/O */
solutions.helloWorld = function (name) {
  return "Hello, world!";
}

solutions.sum = function (a, b) {
  return a + b;
}

solutions.nextNum = function (n) {
  return n + 1;
}

solutions.minutesToSeconds = function (min) {
  return min * 60;
}

solutions.returnSomething = function (text) {
  return "something " + text;
}


/* Module 4.2: Conversions & Arithmetic */
solutions.tempConversion = function (tempF) {
  return (tempF - 32) * 5 / 9;
}


/* Module 4.3: Strings */

solutions.helloName = function (name) {
  return `Hello ${name}!`;
};

solutions.makeAbba = function (a, b) {
  return a + b + b + a;
};

solutions.makeOutWord = function (out, word) {
  front = out.substring(0, 2);
  back = out.substring(2, 4);
  return front + word + back;
};

solutions.extraEnd = function (str) {
  if (str.length > 1) {
    back = str.substring(str.length - 2);
    return back + back + back;
  }
};

solutions.withoutEnd = function (str) {
  return str.substring(1, str.length - 1);
};

solutions.nonStart = function (a, b) {
  a = a.substring(1, a.length);
  b = b.substring(1, b.length);
  return a + b;
};

solutions.firstHalf = function (str) {
  if (str.length % 2 == 0) {
    return str.substring(0, Math.floor(str.length / 2));
  }
  return str;
};

solutions.firstTwo = function (str) {
  if (str.length > 2) {
    return str.substring(0, 2);
  }
  return str;
};

solutions.left2 = function (str) {
  if (str.length > 1) {
    front = str.substring(0, 2);
    back = str.substring(2, str.length);
    return back + front;
  }
  return str;
};

/* Module 4.4: Conditional Statements */
solutions.cigarParty = function (cigars, isWeekend) {
  if (isWeekend) {
    return cigars >= 40;
  }
  return cigars >= 40 && cigars <= 60;
};

solutions.dateFashion = function (you, date) {
  if (you <= 2 || date <= 2) {
    return 0;
  }

  if (you >= 8 || date >= 8) {
    return 2;
  }

  return 1;
};

solutions.squirrelPlay = function (temp, isSummer) {
  if (isSummer && temp >= 60 && temp <= 100) {
    return true;
  }

  if (!isSummer && temp >= 60 && temp <= 90) {
    return true;
  }

  return false;
};

solutions.caughtSpeeding = function (speed, isBirthday) {
  if (isBirthday) {
    if (speed <= 65) {
      return 0;
    } else if (speed >= 66 && speed <= 85) {
      return 1;
    } else if (speed >= 86) {
      return 2;
    }
  }

  if (speed <= 60) {
    return 0;
  } else if (speed >= 61 && speed <= 80) {
    return 1;
  } else {
    return 2;
  }
};

solutions.sortaSum = function (a, b) {
  const res = a + b;
  if (res >= 10 && res <= 19) {
    return 20;
  }
  return res;
};

solutions.alarmClock = function (day, vacation) {
  if (vacation) {
    if (day >= 1 && day <= 5) {
      return '10:00';
    } else return 'off';
  }

  if (day >= 1 && day <= 5) {
    return '7:00';
  } else return '10:00';
};

solutions.love6 = function (a, b) {
  if (a == 6 || b == 6) {
    return true;
  }

  if (a + b == 6 || Math.abs(a - b) == 6) {
    return true;
  }

  return false;
};

solutions.in1To10 = function (n, outsideMode) {
  if (outsideMode) {
    return (n <= 1 || n >= 10);
  }
  return (n >= 1 && n <= 10);
};

solutions.specialEleven = function (n) {
  if (n % 11 == 0 || n % 11 == 1) {
    return true;
  }
  return false;
};

solutions.more20 = function (n) {
  return (n % 20 == 1 || n % 20 == 2);
};

/* Module 4.4: HTML DOM */


/* Module 4.6: Loops */

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

solutions.primes = function (n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false
  }
  return true;
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


solutions.runningSum = function (n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};


solutions.approximatingPi = function (n) {
  let pi = 0.0;
  for (let i = 0; i < n; i++) {
    pi += (-1) ** i * 4 / (2 * i + 1);
  }
  return pi;
};

module.exports = solutions;