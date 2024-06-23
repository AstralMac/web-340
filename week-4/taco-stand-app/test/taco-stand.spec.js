"use strict";

/**
 * Author:Malcolm Abdullah
 * Date: June 22nd, 2024
 * File Name: taco-stand.spec.js
 * Description: Week-4 assignment (I think lol)
 */

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

const tacoStand = new TacoStandEmitter();

function testServeCustomer() {
  try {
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "John");
      console.log("Passed testServeCustomer");
    });
    tacoStand.serveCustomer("John");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco() {
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef");
      console.log("Passed testPrepareTaco");
    });
    tacoStand.prepareTaco("beef");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

function testHandleRush() {
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch");
      console.log("Passed testHandleRush");
    });
    tacoStand.handleRush("lunch");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

// Run tests
testServeCustomer();
testPrepareTaco();
testHandleRush();
