// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// https://vitejs.dev/
// https://www.typescriptlang.org/
// https://code.visualstudio.com/docs/languages/typescript

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