module.exports = [

  /* Module 4.1: Types, Variables, I/O */
  {
    title: 'Module 4.1: Introduction',
    name: 'helloWorld',
    inputs: [
      '()',
    ],
    question: `This is an introduction to how these challenges will work. You will see a starter function that looks like this:<br>
<pre>
function helloWorld() {

}
</pre><br>
All you have to do is type <code>return "Hello, world!"</code> between the curly braces { } and then click the Solve button. If you did this correctly, you will see green checks next to all the tests.`,
  },

  {
    title: 'Module 4.1: Introduction',
    name: 'sum',
    inputs: [
      '(3, 2)',
      '(-3, -6)',
      '(7, 3)',
      '(3, 5)',
      '(2, 3)'
    ],
    question: `Create a function that takes two numbers as arguments and returns their sum. Arguments are inputs to the function. Use these variable names to refer to the values 
    passed to the function. Be sure to return the result.`,
  },

  {
    title: 'Module 4.1: Introduction',
    name: 'nextNum',
    inputs: [
      '(0)',
      '(-3)',
      '(7)',
      '(3)',
      '(2)'
    ],
    question: `Given a single number, increments the number by +1, and returns the result.`,
  },

  {
    title: 'Module 4.1: Introduction',
    name: 'minutesToSeconds',
    inputs: [
      '(5)',
      '(3)',
      '(2)',
      '(0)',
      '(1)'
    ],
    question: `Given a number in minutes, convert it to the number of seconds.`,
  },

  {
    title: 'Module 4.1: Introduction',
    name: 'returnSomething',
    inputs: [
      '("is better than nothing")',
      '("hello")',
      '("what?")',
      '("huh?")',
      '("something")'
    ],
    question: `Given a String of text, return "something" joined with a space " " and the given string.`,
  },


  /* Module 4.2: Conversions & Arithmetic */
  {
    title: 'Module 4.2: Arithmetic',
    name: 'tempConversion',
    inputs: [
      '(212)',
      '(0)',
      '(32)',
      '(98.6)',
      '(75)'
    ],
    question: `Given a temperature in Fahrenheit, convert it to Celsius.`,
  },

  /* Module 4.3: Strings */
  {
    title: 'Module 4.3: Strings',
    name: 'helloName',
    inputs: [
      "('Bob')",
      "('Alice')",
      "('X')",
      "('Dolly')",
      "('Alpha')",
      "('Omega')",
      "('Goodbye')",
      "('ho ho ho')",
      "('xyz!')",
      "('Hello!')",
    ],
    question: 'Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".',
  }, {
    title: 'Module 4.3: Strings',
    name: 'makeAbba',
    inputs: [
      "('Hi', 'Bye')",
      "('Yo', 'Alice')",
      "('What', 'Up')",
      "('aaa', 'bbb')",
      "('x', 'y')",
      "('x', '')",
      "('ba', 'Ya')",
      "('Ya', 'Ya')",
    ],
    question: `Given two strings, a and b, return the result of putting them together
              in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".`,
  }, {
    title: 'Module 4.3: Strings',
    name: 'makeTags',
    question: `The web is built with HTML strings like "<em>Yay</em>" which draws
            Yay as italic text. In this example, the "em" tag makes <em> and </em>
            which surround the word "Yay". Given tag and word strings, create the HTML
            string with tags around the word, e.g. "<em>Yay</em>".`,
    inputs: [
      "('em', 'Yay')",
      "('strong', 'Hello')",
      "('p', 'Yay')",
      "('code', 'here')",
      "('body', 'Heart')",
      "('em', 'em')",
      "('strong', 'i')",
      "('em', '')",
    ],
  }, {
    title: 'Module 4.3: Strings',
    name: 'makeOutWord',
    inputs: [
      "('<<>>', 'Yay')",
      "('<<>>', 'WooHoo')",
      "('[[]]', 'word')",
      "('HHoo', 'Hello')",
      "('abyz', 'YAY')",
    ],
    question: `Given an "out" string length 4, such as "<<>>", and a word,
              return a new string where the word is in the middle of the out string,
              e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting
               at index i and going up to but not including index j.`,
  }, {
    title: 'Module 4.3: Strings',
    name: 'extraEnd',
    inputs: [
      "('Hello')",
      "('ab')",
      "('Hi')",
      "('Candy')",
      "('Code')",
    ],
    question: `Given a string, return a new string made of 3 copies of the
              last 2 chars of the original string. The string length will be at least 2.`,
  }, {
    title: 'Module 4.3: Strings',
    name: 'firstTwo',
    inputs: [
      "('Hello')",
      "('abcdefg')",
      "('ab')",
      "('a')",
      "('')",
      "('kitten')",
      "('hi')",
      "('hiya')",
    ],
    question: `Given a string, return the string made of its first two chars,
              so the String "Hello" yields "He". If the string is shorter than length 2,
              return whatever there is, so "X" yields "X", and the empty string "" yields
              the empty string "". Note that str.length() returns the length of a string.`,
  }, {
    title: 'Module 4.3: Strings',
    name: 'firstHalf',
    inputs: [
      "('WooHoo')",
      "('HelloThere')",
      "('abcdefgh')",
      "('ab')",
      "('')",
      "('0123456789')",
      "('kitten')",
    ],
    question: 'Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".',
  }, {
    title: 'Module 4.3: Strings',
    name: 'withoutEnd',
    inputs: [
      "('Hello')",
      "('java')",
      "('coding')",
      "('code')",
      "('ab')",
      "('Chocolate!')",
      "('kitten')",
      "('woohoo')",
    ],
    question: `Given a string, return a version without the first and last
                char, so "Hello" yields "ell". The string length will be at least 2.`,
  }, {
    title: 'Module 4.3: Strings',
    name: 'nonStart',
    inputs: [
      "('Hello', 'There')",
      "('java', 'code')",
      "('shotl', 'java')",
      "('ab', 'xy')",
      "('ab', 'x')",
      "('x', 'ac')",
      "('a', 'x')",
      "('kit', 'kat')",
      "('mart', 'dart')",
    ],
    question: `Given 2 strings, return their concatenation, except omit the
                first char of each. The strings will be at least length 1.`,
  }, {
    title: 'Module 4.3: Strings',
    name: 'left2',
    inputs: [
      "('Hello')",
      "('java')",
      "('Hi')",
      "('code')",
      "('cat')",
      "('12345')",
      "('Chocolate')",
      "('bricks')",
    ],
    question: `Given a string, return a "rotated left 2" version where the
                first 2 chars are moved to the end. The string length will be at least 2.`,
  },

  /* Module 4.4: Conditional Statements */
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'cigarParty',
    inputs: [
      '(30, false)',
      '(50, false)',
      '(70, true)',
      '(30, true)',
      '(50, true)',
      '(60, false)',
      '(61, false)',
      '(40, false)',
      '(39, false)',
      '(40, true)',
      '(39, true)',
    ],
    question: `When squirrels get together for a party, they like to have cigars. A squirrel
    party is successful when the number of cigars is between 40 and 60, inclusive. Unless it
    is the weekend, in which case there is no upper bound on the number of cigars. Return
    true if the party with the given values is successful, or false otherwise.`,
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'dateFashion',
    inputs: [
      '(5, 10)',
      '(5, 2)',
      '(5, 5)',
      '(3, 3)',
      '(10, 2)',
      '(2, 9)',
      '(9, 9)',
      '(10, 5)',
      '(2, 2)',
      '(3, 7)',
      '(2, 7)',
      '(6, 2)',
    ],
    question: `You and your date are trying to get a table at a restaurant. The parameter
    "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness
    of your date's clothes. The result getting the table is encoded as an int value with 0=no,
    1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes).
    With the exception that if either of you has style of 2 or less, then the result is 0 (no).
    Otherwise the result is 1 (maybe).`,
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'squirrelPlay',
    inputs: [
      '(70, false)',
      '(95, false)',
      '(95, true)',
      '(90, false)',
      '(90, true)',
      '(50, false)',
      '(50, true)',
      '(100, false)',
      '(100, true)',
      '(105, true)',
      '(59, false)',
      '(59, true)',
      '(60, false)',
    ],
    question: `The squirrels in Palo Alto spend most of the day playing. In particular,
    they play if the temperature is between 60 and 90 (inclusive). Unless it is summer,
    then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer,
    return true if the squirrels play and false otherwise.`,
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'caughtSpeeding',
    inputs: [
      '(60, false)',
      '(65, false)',
      '(65, true)',
      '(80, false)',
      '(85, false)',
      '(85, true)',
      '(70, false)',
      '(75, false)',
      '(75, true)',
      '(40, false)',
      '(40, true)',
      '(90, false)',
    ],
    question: `You are driving a little too fast, and a police officer stops you. Write code
    to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket.
    If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result
    is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day,
    your speed can be 5 higher in all cases.`,
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'sortaSum',
    inputs: [
      '(3, 4)',
      '(9, 4)',
      '(10, 11)',
      '(12, -3)',
      '(-3, 12)',
      '(4, 5)',
      '(4, 6)',
      '(14, 7)',
      '(14, 6)',
    ],
    question: `Given 2 ints, a and b, return their sum. However, sums in the range 10..19
    inclusive, are forbidden, so in that case just return 20.`,
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'alarmClock',
    inputs: [
      '(1, false)',
      '(5, false)',
      '(0, false)',
      '(6, false)',
      '(0, true)',
      '(6, true)',
      '(1, true)',
      '(3, true)',
      '(5, true)',
    ],
    question: `Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a
    boolean indicating if we are on vacation, return a string of the form "7:00" indicating
    when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend
    it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00"
    and weekends it should be "off".`,
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'love6',
    inputs: [
      '(6, 4)',
      '(4, 5)',
      '(1, 5)',
      '(1, 6)',
      '(1, 8)',
      '(1, 7)',
      '(7, 5)',
      '(8, 2)',
      '(6, 6)',
      '(-6, 2)',
      '(-4, -10)',
      '(-7, 1)',
      '(7, -1)',
      '(-6, 12)',
      '(-2, -4)',
      '(7, 1)',
      '(0, 9)',
      '(8, 3)',
      '(3, 3)',
      '(3, 4)',
    ],
    question: `The number 6 is a truly great number. Given two int values, a and b, return
    true if either one is 6. Or if their sum or difference is 6. Note: the function
    Math.abs(num) computes the absolute value of a number.`,
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'in1To10',
    inputs: [
      '(5, false)',
      '(11, false)',
      '(11, true)',
      '(10, false)',
      '(10, true)',
      '(9, false)',
      '(9, true)',
      '(1, false)',
      '(1, true)',
      '(0, false)',
      '(0, true)',
      '(-1, false)',
    ],
    question: `Given a number n, return true if n is in the range 1..10, inclusive.
    Unless "outsideMode" is true, in which case return true if the number is less or
    equal to 1, or greater or equal to 10.`,
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'specialEleven',
    inputs: [
      '(22)',
      '(23)',
      '(24)',
      '(21)',
      '(11)',
      '(12)',
      '(10)',
      '(9)',
      '(8)',
      '(0)',
      '(1)',
      '(2)',
      '(121)',
      '(122)',
      '(123)',
      '(46)',
      '(49)',
      '(52)',
      '(54)',
      '(55)',
    ],
    question: `We'll say a number is special if it is a multiple of 11 or if it is one more
    than a multiple of 11. Return true if the given non-negative number is special. Use the %
    "mod" operator.`, // TODO add info on mod, up to and incl exercise nearTen
  },
  {
    title: 'Module 4.4: Conditional Statements',
    name: 'more20',
    inputs: [
      '(20)',
      '(21)',
      '(22)',
      '(23)',
      '(25)',
      '(30)',
      '(31)',
      '(59)',
      '(60)',
      '(61)',
      '(62)',
      '(1020)',
      '(1021)',
      '(1000)',
      '(1001)',
      '(50)',
      '(55)',
      '(40)',
      '(41)',
      '(39)',
      '(42)',
    ],
    question: `Return true if the given non-negative number is 1 or 2 more than a
    multiple of 20.`,
  },

  /* Module 4.4: HTML DOM */


  /* Module 4.6: Loops */
  {
    title: 'Module 4.6: while Loops',
    name: 'leastDivisor',
    inputs: [
      '(15)',
      '(35)',
      '(55)',
      '(2)',
      '(3)',
      '(4)',
      '(5)',
      '(6)',
      '(7)',
      '(8)',
      '(179)',
    ],
    question: `Given an integer not less than 2. Print its smallest integer divisor greater than 1.`,
  }, {
    title: 'Module 4.6: while Loops',
    name: 'powerTwo',
    inputs: [
      '(50)',
      '(10)',
      '(8)',
      '(7)',
      '(1)',
      '(2)',
      '(3)',
      '(4)',
      '(5)',
      '(100)',
      '(1025)',
      '(15431543)',
    ],
    question: `For a given integer N, find the greatest integer x where 2^x is less than or equal to N. Return the value of exponent x.`,
  }, {
    title: 'Module 4.6: while Loops',
    name: 'morningJog',
    inputs: [
      '(1, 3)',
      '(2, 5)',
      '(3, 13)',
      '(2, 6)',
      '(3, 12)',
      '(3, 26)',
      '(1, 6)',
      '(10, 30)',
      '(10, 100)',
      '(100, 101)',
    ],
    question: `As a future athlete you just started your practice for an upcoming event. Given that on the first day you run x miles, and by the event you must be able to run y miles. Calculate the number of days required for you to finally reach the required distance for the event, if you increases your distance each day by 10% from the previous day. Return an integer representing the number of days to reach the required distance. `,
  }, {
    title: 'Module 4.6: for Loops',
    name: 'sumCubes',
    inputs: [
      '(3)',
      '(5)',
      '(9)',
      '(4)',
      '(1)',
      '(6)',
      '(7)',
      '(8)',
      '(2)',
      '(10)',
      '(20)',
      '(30)',
    ],
    question: `For the given integer N calculate the following sum: 1^3 + 2^3 + 3^3 + ... + N^3. `,
  }, {
    title: 'Module 4.6: for Loops',
    name: 'factorial',
    inputs: [
      '(3)',
      '(6)',
      '(2)',
      '(4)',
      '(5)',
      '(1)',
      '(7)',
      '(8)',
      '(9)',
      '(10)',
    ],
    question: `In mathematics, the factorial of an integer n, denoted by n! is the following product: n!=1*2*...*n. For the given integer n, calculate the value n!. Don't use math module in this exercise.`,
  }, {
    title: 'Module 4.6: for Loops',
    name: 'primes',
    inputs: [
      '(3)',
      '(6)',
      '(11)',
      '(17)',
      '(36)',
      '(141)',
      '(137)',
      '(42)',
      '(49)',
      '(10)',
      '(23)',
      '(37)',
    ],
    question: `Given an integer n, check to see if it's a prime number. Return true if prime and false if not prime.`,
  }, {
    title: 'Module 4.6: for Loops',
    name: 'addingFactorials',
    inputs: [
      '(3)',
      '(6)',
      '(2)',
      '(4)',
      '(5)',
      '(1)',
      '(7)',
      '(8)',
      '(9)',
      '(10)',
    ],
    question: `Given an integer n, return the sum 1! + 2! + 3! + ... + n!. This problem has a solution with only one loop, so try to discover it. And don't use the math library!`,
  }, {
    title: 'Module 4.6: for Loops',
    name: 'runningSum',
    inputs: [
      '(3)',
      '(6)',
      '(4)',
      '(2)',
      '(5)',
      '(1)',
      '(7)',
      '(8)',
      '(9)',
      '(10)',
    ],
    question: `Given an integer n, return the sum of integers from 1 to n. If n=4, return 1+2+3+4 or 10.`,
  }, {
    title: 'Module 4.6: for Loops',
    name: 'approximatingPi',
    inputs: [
      '(3)',
      '(6)',
      '(4)',
      '(2)',
      '(5)',
      '(1)',
      '(7)',
      '(8)',
      '(9)',
      '(10)',
    ],
    question: `Given an integer n, return an approximation for pi using the Leibniz formula (https://en.wikipedia.org/wiki/Leibniz/_formula/_for/_%CF%80) with n number of terms. The series is: pi = 4 (1/1 - 1/3 + 1/5 - 1/7 ...). Note the sign alternates and the denominator is 2*k-1. Calculate pi using the number of terms specified in the input value.`,
  }
];