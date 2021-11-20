const Account = require('../models/account');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('error'));
}

const getAccount = (req, res) => {
    const title = 'Авторизация';
    Account
        .find()
        .then((accounts) => res.render(createPath('accounts'), {accounts, title}))
        .catch((error) => handleError(res, error));
}

module.exports = {
    getAccount
}