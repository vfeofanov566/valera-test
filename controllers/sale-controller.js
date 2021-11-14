const Sale = require('../models/sale');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error'));
}

const getSales = (req, res) => {
  Sale
    .find()
    .then((sales) => res.render(createPath('sales'), {sales}))
    .catch((error) => handleError(res, error));
}

const getAddSale = (req, res) => {
  res.render(createPath('add-sale'));
}

const addSale = (req, res) => {
  const {client, product, count, summa, date} = req.body;

  const sale = new Sale({client, product, count, summa, date});
  sale
    .save()
    .then((result) => res.redirect('/sales'))
    .catch((error) => handleError(res, error));
}


const deleteSale = (req, res) => {
  Sale
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
}

const getEditSale = (req, res) => {
  Sale
    .findById(req.params.id)
    .then(sale => res.render(createPath('edit-sale'), { sale }))
    .catch((error) => handleError(res, error));
}

const editSale = (req, res) => {
  const {client, product, count, summa, date} = req.body;
  const { id } = req.params;
  Sale
    .findByIdAndUpdate(id, {client, product, count, summa, date})
    .then((result) => res.redirect(`/sales`))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getSales,
  getAddSale,
  addSale,
  deleteSale,
  getEditSale,
  editSale
}