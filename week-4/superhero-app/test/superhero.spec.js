/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */
"use strict";

const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

const superhero = new SuperheroEmitter();

// TODO: Write tests for the SuperheroEmitter using TDD principles
// Test for the performAction method
function testPerformAction() {
  try {
    superhero.on("perform", (action) => {
      assert.strictEqual(action, "flies");
      console.log("Passed testPerformAction");
    });
    superhero.performAction("flies");
    return true;
  } catch (err) {
    console.error(`Failed testPerformAction: ${err}`);
    return false;
  }
}

// Test for the encounterDanger method
function testEncounterDanger() {
  try {
    superhero.on("encounter", (danger) => {
      assert.strictEqual(danger, "falls");
      console.log("Passed testEncounterDanger");
    });
    superhero.encounterDanger("falls");
    return true;
  } catch (err) {
    console.error(`Failed testEncounterDanger: ${err}`);
    return false;
  }
}

// Test for the helpSomeone method
function testHelpSomeone() {
  try {
    superhero.on("someone", (help) => {
      assert.strictEqual(help, "Help me");
      console.log("Passed testHelpSomeone");
    });
    superhero.helpSomeone("Help me");
    return true;
  } catch (err) {
    console.error(`Failed testHelpSomeone: ${err}`);
    return false;
  }
}

// Run tests
testPerformAction();
testEncounterDanger();
testHelpSomeone();