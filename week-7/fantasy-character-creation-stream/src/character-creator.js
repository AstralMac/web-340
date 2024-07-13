"use strict";
// Author: Malcolm Abdullah
// Date; July 12th, 2024

const { Transform } = require('stream');

class CharacterCreator extends Transform {
  constructor() {
    super({ objectMode: true });
  }

  _transform(chunk, encoding, callback) {
    try {
      const data = chunk.toString().trim();
      if (!data) {
        this.emit('error', new Error('Invalid data'));
        return callback();
      }
      const processedData = `Processed: ${data}`;
      this.push(processedData);
      callback();
    } catch (error) {
      this.emit('error', error);
      callback();
    }
  }
}

module.exports = CharacterCreator;
