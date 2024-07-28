"use strict";

const {spawnSync} = require("child_process");

const child = spawnSync("node", ["superheroes.js"]);

console.log(child.stdout.toString());