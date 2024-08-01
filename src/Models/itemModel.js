const mongoose = require('mongoose');
const ingredientsItem = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const commentItem = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});
const moreItem = new mongoose.Schema({
  prep_time: {
    type: String,
    required: true,
  },
  cook_time: {
    type: String,
    required: true,
  },
  servings: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

const itemSchema = new mongoose.Schema({
  menuId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  thumbnail_image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  tags: [String],
  ingredients: {
    type: [ingredientsItem],
    required: true,
  },

  comments: {
    type: [commentItem],
    required: true,
  },
  more: {
    type: [moreItem],
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema)

module.exports =Item