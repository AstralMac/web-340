"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 { *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.join(__dirname, '../characters.json');

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  afterEach(async () => {
    // Cleanup: Remove the file after each test
    try {
      await fs.unlink(FILE_PATH);
    } catch (error) {
      // Ignore errors if file doesn't exist
    }
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  it("should write a character to a file", async () => {
    const character = { class: 'Warrior', gender: 'Male', funFact: 'Has a pet dragon' };
    await createCharacter(character);

    const characters = await getCharacters();
    expect(characters).toContainEqual(character);
  });
  // 2. Test that getCharacters reads characters from the file
  it("should read characters from the file", async () => {
    const character = { class: 'Mage', gender: 'Female', funFact: 'Can control lightning' };
    await fs.writeFile(FILE_PATH, JSON.stringify([character]), 'utf8');

    const characters = await getCharacters();
    expect(characters).toContainEqual(character);
  });
  // 3. Test that createCharacter handles errors when writing to the file
  it("should handle errors when writing to the file", async () => {
    const character = { class: 'Rogue', gender: 'Other', funFact: 'Stealthy as a shadow' };

    jest.spyOn(fs, 'writeFile').mockImplementation(() => {
      throw new Error('Simulated write error');
    });

    await expect(createCharacter(character)).rejects.toThrow('Simulated write error');
  });
});