/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

superhero.on("perform", (action) => {
  console.log("Superman ${action} through the sky.");
});

superhero.on ("encounter", (danger) => {
  console.log("Lois Lane ${danger} from a building");
});

superhero.on ("someone", (help) => {
  console.log(" ${help} please save me");
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  switch (command) {
    case "action":
      superhero.performAction(arg);
      break;
    case "danger":
      superhero.encounterDanger(arg);
      break;
    case "help":
      superhero.helpSomeone(arg);
      break;
      // TODO: Handle the commands
    default:
      console.log(`Unknown command: ${command}`);
  }
});

console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);