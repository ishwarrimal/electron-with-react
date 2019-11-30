Project contains code for implementation of react with electron. 

Steps to run:

1. clone this repo
2. npm install
3. Open two terminal:
    3.a: terminal 1: npm start
    3.b: terminal 2: npm run electron

There are multiple commits, each with different concepts:

1. commit : 9ee3ce9bd3206c5f360118c7bd259b299bfc1aad
contains implementation of redux with saga

2. commit: 3dd963e8aaee4d99a2305c314fc42b3d1f26288c
contains code for setting up bitbucket pipeline

3. commit: e6a42dd3f934c82983cfab7874c1a8f998ee65bf
setting up error logger in the main process

4. commit: 3b8c7e060334eb25b0291e9adc1a1bb269ee5c95
Creted error boundary component which console logs any unhandled exceptions

5. commit: da9f3c745ea2b7aed59f41708ef98279430e9db0
IPC between main and renderer process for logging errors to file