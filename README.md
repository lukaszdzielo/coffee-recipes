## Intro

**Where did the idea for the app come from?**
I searched through the pdfs I received for signing up to the newsletter several times, and then searched them for a specific recipe. That's where the idea came from to create an application with recipes on GitHub Pages.

**Result**
Now I always have them at hand, under one link saved in bookmarks. It was also a great opportunity to learn **VUE** and practice **TypeScript** (I tried to use any `as` rarely as possible ;)). I am very pleased because I did not use any tutorial or instructions titled "how to make an application with recipes...". I also consider my code to be my own and time well spent learning :)

**Things to implement that I would like to have in the application:**
- Hidden in settings:
	- [x] light and dark modes and the ability to change them to your own preferences,
	- [x] language support in the browser. Mainly PL language but let the application allow ENG if the recipe has one in JSON,
	- [x] ability to change font size,
- Recipe:
	- [x] photo, title, list of ingredients and preparation method in HTML format
- Filter:
	- [x] searching for ingredients from the list of ingredients in JSON
	- [x] filter a recipe with all ingredients
	- [x] filter recipes that have at least one ingredient from the selected
- Additionally:
	- [x] let the search parameters be saved in the URL so that you can send filtered recipes

# How to open on localhost

```sh
npm run dev
npm run dev -- --host
```
---

### Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

---

### Font / Icons

```sh
https://fonts.google.com/icons
Weight: 400
Grade: 0
Optical Size: 24
Style: Rounded
```
