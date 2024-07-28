// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getGameCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        {Class: "Warrior", Gender: "Other", Specialty: "Melee combat"},
        {Class: "Mage", Gender: "Female", Specialty:"Ice magic"},
        {Class: "Rogue", Gender: "Male", Specialty:"Stealth"}
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("fake-news-script.js");
    gameCharacters.getGameCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("src/failing-script.js");
    gameCharacters.getGameCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});