"use strict";

const {spawn} = require("child_process");
const {join} = require("path");
const dataFile = join(_dirname, "comic-books-data.js");

class ComicBooks {
  constructor(scriptPath = dataFile) {
    this.scriptPath = scriptPath;
  }

  getComicBooks(callback) {
    const child = spawn("node", [this.scriptPath]);

    child.stdout.on("data", (data) => {
      const comicData = JSON. parse(data.toString());
      callback(comicData, null);
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

module.exports = {ComicBooks};