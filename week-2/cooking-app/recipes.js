/**
 * Author:Malcolm Abdullah
 * Date:06-09-2024
 * File Name: recipes.js
 * Description: simple recipe application using the Node.js CommonJS module system
*/


// Define the createRecipe function
function createRecipe(ingredients) {
   // TODO: Implement this function
  const ingredientList = ingredients.join(', ');
  return `Recipe created with ingredients: ${ingredientList}`;
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return `Timer set for ${minutes} minutes.`;
}

module.exports = {
  createRecipe,
  setTimer
};

// Define the quit function
function quit() {
   // TODO: Implement this function
  return "Program exited";
}

// TODO: Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
};