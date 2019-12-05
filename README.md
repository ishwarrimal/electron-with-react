This project is for anyone who is new to electron and/or react. (But not an absolute beginner. If you have basic kowledge of `state`, `props` etc you may proceed further)
Most of the concepts are of react, so you can use this as a base to learn react as well even without electron.
Since this is done for electron, might not work in browser straightforward.. things like `ipcRenderer` `web-security` have been set particularly for 
electron app.


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


2. contains code for setting up bitbucket pipeline  
    commit: `3dd963e8aaee4d99a2305c314fc42b3d1f26288c`

3. setting up error logger in the main process  
    commit: `e6a42dd3f934c82983cfab7874c1a8f998ee65bf`


4. Creted error boundary component which console logs any unhandled exceptions  
    commit: `3b8c7e060334eb25b0291e9adc1a1bb269ee5c95`


5. IPC between main and renderer process for logging errors to file  
    commit: `da9f3c745ea2b7aed59f41708ef98279430e9db0`


6. Implementing hooks (useState, useEffect and useContext)  
    commit: `dd9aa162b3c1b6450d753e1e78d125f8c70b5e6c`


7. Implementing useContext and useEffect with class component  
    commit : `d16356bc4e6a308cd00d8787722d90d216988f04`
