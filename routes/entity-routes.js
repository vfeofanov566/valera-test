const express = require('express');
const {
  getEntities,
  getAddEntity,
  addEntity,
  deleteEntity,
  getEditEntity,
  editEntity
} = require('../controllers/entity-controller');

const router = express.Router();

router.get('/entities', getEntities);
router.get('/add-entity', getAddEntity);
router.post('/add-entity', addEntity);
router.delete('/entities/:id', deleteEntity);
router.get('/edit/:id', getEditEntity);
router.put('/edit/:id', editEntity);

module.exports = router;