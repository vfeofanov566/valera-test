const express = require('express');
const {
  getIndividuals,
  getAddIndividual,
  addIndividual,
  deleteIndividual,
  getEditIndividual,
  editIndividual
} = require('../controllers/individual-controller');

const router = express.Router();

router.get('/individuals', getIndividuals);
router.get('/add-individual', getAddIndividual);
router.post('/add-individual', addIndividual);
router.delete('/individuals/:id', deleteIndividual);
router.get('/individuals/edit/:id', getEditIndividual);
router.put('/individuals/edit/:id', editIndividual);

module.exports = router;