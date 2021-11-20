const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tpin: {
    type: Number,
    required: true
  }
});

const Entity = mongoose.model('Entity', entitySchema);
module.exports = Entity;