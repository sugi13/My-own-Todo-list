// schema -> design and structure the data
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


// creating of new schema object
const TodoSchema = new Schema({
  Task: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  }
}, {timestamps: true})  // timestamps -> data created at, updated at

// creating new model for schema

// model -> used to communicate with schema or data

const todo = mongoose.model('Todo', TodoSchema);

module.exports = todo;