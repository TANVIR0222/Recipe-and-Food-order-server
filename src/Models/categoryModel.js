const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new mongoose.Schema({
    name:String,
    menuId: Number
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;  //export the model