# Introduction
Small example that shows a simple Angular client that can connect to an Express API and perform a search in a database. 

To make it work adjust your postgres config and queries in `server.js`.

# Develop client
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Develop server
Run `npm run watch` in the client folder to watch for changes but build into /dist folder that is served by the server. The application will not automatically reload.

Run `npm start` to run server. Navigate to `http://localhost:3000/` in a browser to open the Angular application served by the server.

## Nodemon
Installing can make server development easier as it watches for changes and automatically restart the server.

Install globally by running `npm install -g nodemon`

Run `npm watch` to start the server with nodemon.