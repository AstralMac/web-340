"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const fs = require('fs').promises;

const path = require('path');

const FILE_PATH = path.join(__dirname, '../characters.json');

async function createCharacter(character) {
  // TODO: Implement this function
  try {
    const characters = await getCharacters(); // Read existing characters
    characters.push(character); // Add the new character
    await fs.writeFile(FILE_PATH, JSON.stringify(characters), 'utf8'); // Write all characters back to the file
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Handle specific errors if needed
      throw new Error('File operation error');
    }
    // Rethrow the specific error message
    throw new Error('Simulated write error');
  }
}

async function getCharacters() {
  // TODO: Implement this function
  try {
    const data = await fs.readFile(FILE_PATH, 'utf8'); // Read the file
    return JSON.parse(data); // Parse and return the characters
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []; // File doesn’t exist, return an empty array
    }
    throw new Error('Failed to read characters from file');
  }
}


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
 module.exports = { createCharacter, getCharacters }; // For promises