"use strict";

const {exec}= require("child_process");

exec("echo 'Flour, Sugar, Eggs, Butter'",(err, stdout, stderr)=> {
    if(err){
        console.error("Error:", err);
        return;
    }
    if(stderr){
        console.error("stderr:", stderr);
        return;
    }
    console.log("stdout:", stdout);
});