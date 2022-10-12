let $ = require("jquery");
let inputParser = require("./inputParser.js");
let solutions = require("../solutions.js");
let prettyPrintMap = require("./prettyPrintMap.js");

module.exports = function (exercise, exerciseName) {
    // example/sample runs
    for (let i = 0; i <= 2; i++) {
        try {
            let input = inputParser(exercise, exercise.inputs[i]);
            let result;
            if (exercise.inputType === "map") {
                // display syntax message
                if (i === 0) {
                    $('.examples').append(`<p><em>Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.</em></p>`);
                }

                let inputCopy = inputParser(exercise, exercise.inputs[i]);
                let formattedInput = prettyPrintMap(inputCopy, "parentheses");
                formattedInput = formattedInput.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
                result = solutions[exerciseName](inputCopy);
                let formattedResult = prettyPrintMap(result);
                formattedResult = formattedResult.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
                $('.examples').append(`<li>${exerciseName}${formattedInput} → ${formattedResult}</li>`);
            }
            else {
                result = solutions[exerciseName](...input);
                result = result.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
                $('.examples').append(`<li>${exerciseName}${exercise.inputs[i].replaceAll('<', '&lt;').replace('>', '&gt;')} → ${result}</li>`);
            }
        }
        catch (e) {
            break;
        }
    }
}