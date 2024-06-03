/**
 * Author:
 * Date:
 * File Name:
 * Description:
*/

"use strict";

// TODO: Implement the weight conversion logic here
// weight-converter.js
const readline = require('readline');

// Function to convert pounds to kilograms
function convertPoundsToKilograms(pounds) {
    return pounds / 2.20462; // 1 pound is approximately 0.453592 kilograms
}

// Create interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function
function main() {
    // Check if there's exactly one command line argument
    if (process.argv.length !== 3) {
        console.error('Usage: node weight-converter.js <pounds>'); // Print usage message to stderr
        process.exit(1); // Exit with error status code
    }

    const pounds = parseFloat(process.argv[2]); // Convert argument to a floating-point number

    // Check if the argument is a valid number
    if (isNaN(pounds)) {
        console.error('Input must be a number.'); // Print error message to stderr
        process.exit(1); // Exit with error status code
    }

    const kilograms = convertPoundsToKilograms(pounds); // Convert pounds to kilograms
    console.log(kilograms.toFixed(2)); // Print converted weight to console, rounded to 2 decimal places

    rl.close(); // Close the readline interface
}

// Run main function
main();
