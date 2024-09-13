// // https://code.visualstudio.com/docs/languages/typescript
// const res = await fetch("./recipes.json");
// const json = await res.json();

// const list = document.querySelector('#recipeList');
// console.log('list', list);

// const recipeTemplate = (recipe) => {
//     console.log('recipe', recipe);
// };

// json.forEach(recipe => {
//     recipeTemplate(recipe);
// });


const list = document.querySelector('#recipeList');

const recipeTemplate = (recipe: object) => {
    console.log('recipe', recipe);
};

(async function myFunction() {
    const res = await fetch("./recipes.json");
    const json = await res.json();


    console.log('?', json, typeof json);
    for (const kye in json) {
        console.log('?', kye);

        if (list) {
            list.innerHTML += `<div>${kye}</div>`;
            // list.appendChild('<div>asd</div>')
        }
    }

    // for ((recipe: object) of json) {
    //     console.log('recipe', recipe);
    // }

    // json.forEach((recipe: object) => {
    //     recipeTemplate(recipe);
    // });

})();



