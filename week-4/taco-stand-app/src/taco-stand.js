"use strict";

/**
 * Author: Malcolm Abdullah
 * Date: June 22nd, 2024
 * File Name: taco-stand.js
 * Description: Week-4 assignment (I think lol)
 */

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;
