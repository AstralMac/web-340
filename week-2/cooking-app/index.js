/**
 * Author:Malcolm Abdullah
 * Date:06-09-2024
 * File Name:index.js
 * Description: file used to demonstrate functionality of created modules
*/

// TODO: Import your module using require
const recipes = require("./recipes");
// TODO: Implement your CLI program here

console.log(recipes.createRecipe(["ingredient1", "ingredient 2"]));
console.log(recipes.setTimer(10));
console.log(recipes.quit());