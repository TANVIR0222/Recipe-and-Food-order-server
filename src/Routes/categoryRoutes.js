const express = require('express');

const route = express.Router()

route.get('/categories/:category')

module.exports = route;
