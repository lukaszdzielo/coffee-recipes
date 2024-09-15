// // https://code.visualstudio.com/docs/languages/typescript

const list = document.querySelector('#recipeList');

const recipeTemplate = (recipe: any) => {
    const { name, preparation } = recipe;

    return `<div class="recipe">
    ${(name) && `<div class="recipe__name">${name}</div>`}
    ${preparation && `<div class="recipe__preparation">${preparation}</div>`}
    </div>`
};

async function init() {
    const res = await fetch("./recipes.json");
    const json = await res.json();

    console.log('lang', navigator.language);

    for (const kye in json) {
        if (list && json[kye]) {
            list.innerHTML += recipeTemplate(json[kye]);
        }
    }
};

init();