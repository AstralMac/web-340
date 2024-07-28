"use strict";

process.on("message", (command) => {
    let state;

    switch(command) {
        
        case "start":
            state = "Game started";
            break;

        case "play":
            state = "Playing game";
            break;

        case "stop":
            state = "Game stopped";
            break;

        default:
            state = "Unknown command";
    }
    process.send({state});
});