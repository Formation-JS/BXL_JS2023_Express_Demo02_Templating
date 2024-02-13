'use strict';
require('dotenv').config(); // « DotEnv » doit toujours être le premier import !!!

// Création du serveur Web
const express = require('express');
const app = express();

// Middlewares
const loggerMiddleware = (req, res, next) => {
    // Code avant le "next"
    const timeStart = new Date();

    // On passe au prochain middleware
    next();

    // Code après le "next"
    const {url, method} = req;  // Equivalent : const url = req.url;
                                //              const method = req.method;
                                
    const timeEnd = new Date();

    console.log(`[${method}] (${timeEnd - timeStart}ms) ${url}`);
}
app.use(loggerMiddleware);

// Routing
const routes = require('express').Router();
routes.get('/', (req, res) => {
    res.status(500).send('<h1>Hello World </h1>');
})
app.use(routes);

// Démarrage du serveur
app.listen(8080, () => {
    console.log(`Web Server running on port 8080`);
})