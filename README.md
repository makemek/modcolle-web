### Development Mode
With [nodemon](https://npmjs.org/packages/nodemon) and [browser-sync](https://npmjs.org/packages/browser-sync)
> **In this mode, no environment variables are loaded**.
You can still set them inside a command line if needed.
```
npm run dev

-----------
(optional) configure browser-sync using environment variables before running.
PORT=<port number> # browser-sync app's proxy port; default is 5000
PORT_DEV=<port number> # browser-sync listeing port; default is 3000
```
