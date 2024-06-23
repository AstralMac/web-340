"use strict";

/**
 * Author:Malcolm Abdullah
 * Date: June 22nd, 2024
 * File Name: index.js
 * Description: Week-4 assignment (I think lol)
 */

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (input) => {
  const [command, arg] = input.split(" ");
  switch (command) {
    case "serve":
      tacoStand.serveCustomer(arg);
      break;
    case "prepare":
      tacoStand.prepareTaco(arg);
      break;
    case "rush":
      tacoStand.handleRush(arg);
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }
});

console.log(`Enter a command: "serve <customer>", "prepare <taco>", or "rush <rush>".`);
