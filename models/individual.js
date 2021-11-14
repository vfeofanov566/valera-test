const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const individualSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: false
  },
  passport: {
    type: String,
    required: false
  }
});

const Individual = mongoose.model('Individual', individualSchema);
module.exports = Individual;