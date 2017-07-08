# Modcolle Web Server
A front-end of Modcolle.
All webpage assets are in here.

Modcolle use [http-server](https://www.npmjs.com/package/http-server) to quickly spin-up a server for serving static files from `/public`.
All static files are created from Webpack, bundling JS, CSS, and other related assets together

## Installation
```
npm install
```

## Running the App
### Development Mode
Incrementally rebuild and bundle assets on file within `/src` changes
```
npm run dev
```

### Production Mode
Javascript and CSS are uglified
```
npm start
```
