const routes = require('express').Router();
routes.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World </h1>');
})

module.exports = routes;