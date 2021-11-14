const express = require('express');
const {
    getAccount
} = require('../controllers/account-controller');

const router = express.Router();

router.get('/accounts', getAccount);

module.exports = router;