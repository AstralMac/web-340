"use strict";

const {execSync} = require("child_process");

const output = execSync("node presidents.js");
console.log(output.toString());