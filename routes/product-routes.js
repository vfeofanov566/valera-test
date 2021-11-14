const express = require('express');
const {
  getProducts,
  getAddProduct,
  addProduct,
  deleteProduct,
  getEditProduct,
  editProduct
} = require('../controllers/product-controller');

const router = express.Router();

router.get('/products', getProducts);
router.get('/add-product', getAddProduct);
router.post('/add-product', addProduct);
router.delete('/products/:id', deleteProduct);
router.get('/products/edit/:id', getEditProduct);
router.put('/products/edit/:id', editProduct);

module.exports = router;