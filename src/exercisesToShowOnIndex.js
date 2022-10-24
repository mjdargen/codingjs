
let warmupExercises = require("./data/warmup.js");
let stringExercises = require("./data/string.js");
let recursionExercises = require("./data/recursion.js");
let logicExercises = require("./data/logic.js");
let loopExercises = require("./data/loop.js");
let arrayExercises = require("./data/array.js");
let apExercises = require("./data/ap.js");
let mapExercises = require("./data/map.js");

let mainPageExercises = [...warmupExercises, ...stringExercises,
...logicExercises, ...arrayExercises,
...recursionExercises, ...apExercises,
...mapExercises, ...loopExercises];

module.exports = mainPageExercises;