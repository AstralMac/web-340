"use strict";

const {spawn} = require("child_process");

class VideoGame {
    sendCommand(command, callback) {
        const child = spawn("node", ["game.js"]);

        child.on("error", (error) => {
            throw error;
        })

        child.stdout.on("data", (data) => {
            const {state} = JSON.parse(data.toString());
            callback(state);
        });
        child.send({command})
    }
}

module.exports = {VideoGame};