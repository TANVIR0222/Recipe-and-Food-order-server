const express = require('express');
 const route = express.Router();

 const itemControlle = require('../Controllers/itemControllers');

route.get('/all-items', itemControlle.getAllItems)

module.exports= route;
