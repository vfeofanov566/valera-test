const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  client: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  count: {
    type: String,
    required: true
  },
  summa: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;