/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
describe("bakePie function", () => {
  it("should return success message when all essential ingredients are present", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    expect(result).toBe("Successfully baked a apple pie!");
  });

  it("should log a warning and call process.exit when an essential ingredient is missing", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

    bakePie("apple", ["flour", "sugar", "apples"]);

    expect(mockWarn).toHaveBeenCalledWith("Missing essential ingredient(s): butter");
    expect(mockExit).toHaveBeenCalledWith(1);

    mockWarn.mockRestore();
    mockExit.mockRestore();
  });

  it("should log a warning and call process.exit when multiple essential ingredients are missing", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

    bakePie("apple", ["flour", "apples"]);

    expect(mockWarn).toHaveBeenCalledWith("Missing essential ingredient(s): sugar, butter");
    expect(mockExit).toHaveBeenCalledWith(1);

    mockWarn.mockRestore();
    mockExit.mockRestore();
  });
});