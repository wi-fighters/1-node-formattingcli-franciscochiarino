// Import
const {formatInput} = require('./formatting.js');
const {showHelp} = require('./messaging.js');

// Get user input
const inputCLI = process.argv.slice(2);

// Return
if (inputCLI[0] === '--help') {
    console.log(showHelp());
} else {
    console.log(formatInput(inputCLI));
}


