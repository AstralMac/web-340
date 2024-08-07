// game-characters.js
"use strict";


const { spawn } = require("child_process");
const {join} = require("path");
const dataFile = join(__dirname, "game-characters-data.js");

class GameCharacters {
  constructor(scriptPath = dataFile) {
    // TODO: Set the script file path
    this.scriptPath = scriptPath;
  }

  getGameCharacters(callback) {
    // TODO: Implement this method
    const child = spawn("node", [this.scriptPath]);

    let stdout = "";
    let stderr= "";

    child.stdout.on("data", (data) => {
      const gameCharacters = JSON.parse(data.toString());
      callback(gameCharacters, null);
    });

    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };