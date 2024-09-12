// https://code.visualstudio.com/docs/languages/typescript
const res = await fetch("./recipes.json");
const json = await res.json();

const list = document.querySelector('#recipeList');
console.log('list', list);

const recipeTemplate = (recipe) => {
    console.log('recipe', recipe);
};

json.forEach(recipe => {
    recipeTemplate(recipe);
});
