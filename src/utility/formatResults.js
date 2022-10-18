let _ = require("lodash");

/** Return row for html table **/
function formatResults(funcName, inputStr, idealOutput, output) {
    const ok = _.isEqual(output, idealOutput);
    if (typeof output === "string") {
        output = output.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    }
    if (typeof idealOutput === "string") {
        idealOutput = idealOutput.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    }
    return `<tr>
            <td>${funcName}${inputStr} → ${idealOutput}</td>
            <td>${output}</td>
            <td>${ok ? '✔' : '✖'}</td>
            <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>
        </tr>`;
}

module.exports = formatResults;