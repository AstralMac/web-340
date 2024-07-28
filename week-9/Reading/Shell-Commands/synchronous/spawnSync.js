"use strict";

const {spawnSync}= require("child_process");

const child = spawnSync("echo",["Superman, Batman, Wonder Woman"]);

if(child.error){
    console.error("Error:", child.error);
}else{
    console.log("stdou:", child.stdout.toString());
}