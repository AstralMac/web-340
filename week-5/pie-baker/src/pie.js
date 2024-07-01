/**
 * Author:Malcolm Abdullah
 * Date:
 * File Name:
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const essentialIngredients = ["flour", "sugar", "butter"];
  const missingIngredients = essentialIngredients.filter(item => !ingredients.includes(item));

  if (missingIngredients.length > 0) {
    console.warn(`Missing essential ingredient(s): ${missingIngredients.join(", ")}`);
    process.exit(1);
  }

  return `Successfully baked a ${pieType} pie!`;
}

module.exports = { bakePie };