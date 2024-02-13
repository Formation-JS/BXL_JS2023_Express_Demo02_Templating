'use strict';
require('dotenv').config(); // « DotEnv » doit toujours être le premier import !!!

// Imports
const express = require('express');
const loggerMiddleware = require('./middlewares/logger.middleware');
const routes = require('./routes');

// Création du serveur Web
const app = express();

// Middlewares
app.use(loggerMiddleware);

// Routing
app.use(routes);

// Démarrage du serveur
app.listen(8080, () => {
    console.log(`Web Server running on port 8080`);
})