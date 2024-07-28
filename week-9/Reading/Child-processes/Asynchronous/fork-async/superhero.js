"use strict";

process.on("message",(hero) => {
    console.log("this process will handle:", hero);
});

process.send("done");