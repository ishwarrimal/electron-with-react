This project is for anyone who is new to electron and/or react. (But not an absolute beginner. If you have basic kowledge of `state`, `props` etc you may proceed further)
Most of the concepts are of react, so you can use this as a base to learn react as well even without electron.
Since this is done for electron, might not work in browser straightforward.. things like `ipcRenderer` `web-security` have been set particularly for
electron app.

Concepts covered:

### redux

We are making use of redux to maintain a central store.

### Saga

Saga is a middleware for store. All the api call we make via saga

### Hooks (useState, useEffect, useContext)

Hooks are a special API provided by react community to minimize our task of using state, updating them and other things for `functional component`.
Link: https://reactjs.org/docs/hooks-intro.html

### Sentry

You can make use of sentry to log your excepitons to sentry server
I have used sentry in one of the commit `7d0ae7536fbec84b129d7220ad555b65dc32bb7e`.
You need to replace the `sentry.init(.....)` with youe own keys which you get while creating sentery porject.
NOTE: You need to initialize sentry in main process and in every renderer process as well.

### Prettier

Prettier is great to use with Visual Studio Code. Just download the prettier vscode extension from : https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode . Pro tip: set it to only run Prettier when it detects a Prettier config file. Makes it so you never have to turn it off. In order to do that, set `prettier.requireConfig` to `true` and `editor.formatOnSave` to `true` from vscode settings. This will enable yoyu to auto format when u save the file.

Adding script "format": "prettier --write \"src/\*_/_.{js,jsx}\"" `on package.json`.
Running `npm run format` will format all the files

### Eslint

On top of Prettier which takes care of formatting the code for you, we would want to enforce some best coding practices: for example we don't want peple ot use js freatures that are depricated like with or using var for varibale declaration. We use ESLint for such rules.

---

Project contains code for implementation of react with electron.

Steps to run:

1. clone this repo
2. npm install
3. Open two terminal:
   3.a: terminal 1: npm start
   3.b: terminal 2: npm run electron

There are multiple commits, each with different concepts:

1. contains implementation of redux with saga  
   commit : `9ee3ce9bd3206c5f360118c7bd259b299bfc1aad`

2) contains code for setting up bitbucket pipeline  
   commit: `3dd963e8aaee4d99a2305c314fc42b3d1f26288c`

3) setting up error logger in the main process  
   commit: `e6a42dd3f934c82983cfab7874c1a8f998ee65bf`

4. Creted error boundary component which console logs any unhandled exceptions  
   commit: `3b8c7e060334eb25b0291e9adc1a1bb269ee5c95`

5) IPC between main and renderer process for logging errors to file  
   commit: `da9f3c745ea2b7aed59f41708ef98279430e9db0`

6. Implementing hooks (useState, useEffect and useContext)  
   commit: `dd9aa162b3c1b6450d753e1e78d125f8c70b5e6c`

7) Implementing useContext and useEffect with class component  
   commit : `d16356bc4e6a308cd00d8787722d90d216988f04`

8) Integrating sentry  
   commit : `7d0ae7536fbec84b129d7220ad555b65dc32bb7e`

9) Prettier integration  
   commit : `055e814c7a7269eceb68d87203c99ebf4117c124`

10) Eslint integration  
    commit: `8d1517ddac8d1f74ef5622a33fb330d6ae956f4b`

11) Native custom menu  
    commit: `90ddf8dc9247584e03f3965c247ef3ffdc60ecad`
