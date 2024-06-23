/**
 * Author: Malcolm Abdullah
 * Date: June 22nd, 2024
 * File Name: superhero.js
 * Description: Week 4 assignment
 */

const EventEmitter = require("events");

// TODO: Create a SuperheroEmitter class that extends EventEmitter and implements the following methods: performAction, encounterDanger, and helpSomeone

class SuperheroEmitter extends EventEmitter {
  performAction(action){
    this.emit("perform", action);
  }
  encounterDanger(danger){
    this.emit ("encounter", danger);
  }
  helpSomeone(help) {
    this.emit("someone", help);
  }
}

module.exports= SuperheroEmitter;