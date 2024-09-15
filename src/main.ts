// https://vitejs.dev/
// https://www.typescriptlang.org/
// https://code.visualstudio.com/docs/languages/typescript

// const list = document.querySelector('#recipeList');
const dataUrl = "/recipes.json";

// const recipeTemplate = (recipe: any) => {
//   const { name, preparation } = recipe;

//   return `<div class="recipe">
//     ${(name) && `<div class="recipe__name">${name}</div>`}
//     ${preparation && `<div class="recipe__preparation">${preparation}</div>`}
//     </div>`
// };

async function init() {
  console.log('lang', navigator.language);

  const res = await fetch(dataUrl);
  const json = await res.json();

  console.log('lang', res, json);

  // for (const kye in json) {
  //   if (list && json[kye]) {
  //     list.innerHTML += recipeTemplate(json[kye]);
  //   }
  // }
};

init();