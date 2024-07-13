"use strict";
// Author: Malcolm Abdullah
// Date: July 12th, 2024


const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.on("data", (chunk) => {
      expect(chunk.toString()).toBe("Processed: Warrior");
      done();
    });
    characterCreator.write("Warrior");
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) => {
      expect(err).toBeTruthy();
      done();
    });

    characterCreator.write(" ");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const input = ["Mage", "Female", "Loves magic"];
    const expectedOutputs = [
      "Processed: Mage",
      "Processed: Female",
      "Processed: Loves magic"
    ];

    let outputs = [];

    characterCreator.on("data", (chunk)=> {
      outputs.push(chunk.toString().trim());
      if (outputs.length === input.length) {
        expect(outputs).toEqual(expectedOutputs);
        done();
      }
    });

    input.forEach(data => characterCreator.write(data));
  });
});