"use strict";

const {execSync} = require("child_process");

try {
    const stdout= execSync("echo 'flour, sugar, eggs, butter'"); //stdout is a Buffer

    console.log("stdout:", stdout.toString());
}catch(err){
    console.error("stderr:", err.stderr.toString());
}