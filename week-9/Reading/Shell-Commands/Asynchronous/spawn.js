"use strict";

const {spawn} = require("child_process");

const child = spawn("echo", ["Superman, Batman, Wonder Woman"]);

child.on("error",(err) => {
    console.error("Error:", err);
})

child.stdout.on("data", (data)=>{
    console.log("stdout:", data.toString());
});

child.stderr.on("data",(data)=> {
    console.error("stderr:", data)
});