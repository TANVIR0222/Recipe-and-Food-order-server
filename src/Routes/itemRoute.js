const express = require('express');
 const route = express.Router();

 const itemControlle = require('../Controllers/itemControllers');

route.get('/all-items', itemControlle.getAllItems)
route.get('/items', itemControlle.getsearchItemAll)
route.get('/items/:id', itemControlle.getSingleItems)

module.exports= route;
