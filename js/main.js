// https://code.visualstudio.com/docs/languages/typescript

import { recipes } from './recipes.js';

const list = document.querySelector('#recipeList');

const recipeTemplate = (recipe) => {
    console.log('123', list, recipe);
};

recipes.forEach(recipe => {
    recipeTemplate(recipe);
});
