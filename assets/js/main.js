"use strict";
// // https://code.visualstudio.com/docs/languages/typescript
// const res = await fetch("./recipes.json");
// const json = await res.json();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const list = document.querySelector('#recipeList');
// console.log('list', list);
// const recipeTemplate = (recipe) => {
//     console.log('recipe', recipe);
// };
// json.forEach(recipe => {
//     recipeTemplate(recipe);
// });
const list = document.querySelector('#recipeList');
const recipeTemplate = (recipe) => {
    console.log('recipe', recipe);
};
(function myFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("./recipes.json");
        const json = yield res.json();
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
    });
})();
