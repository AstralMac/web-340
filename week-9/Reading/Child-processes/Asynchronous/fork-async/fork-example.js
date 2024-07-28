"use strict";

const {fork} = require("child_process");

const superheroes = ["Batman", "Superman", "Wonder Woman"];

superheroes.forEach((hero)=> {
    const child = fork("superhero.js");//fork a new process
    child.send(hero);// send the hero to the child process

    child.on("message", (message)=> {console.log("Child process for" + hero + "is" + message);
    });
});