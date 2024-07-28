"use strict";

const {spawn} = require("child_process");

const child = spawn("node", ["ingredients.js"]);

child.stdout.on("data",(data) => {
  console.log(data.toString());
});