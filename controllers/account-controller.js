const Account = require('../models/account');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('error'));
}

const getAccount = (req, res) => {
    Account
        .find()
        .then((accounts) => res.render(createPath('accounts'), {accounts}))
        .catch((error) => handleError(res, error));
}

module.exports = {
    getAccount
}