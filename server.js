const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const accountRoutes = require('./routes/account-routes');
const entityRoutes = require('./routes/entity-routes');
const individualRoutes = require('./routes/individual-routes');
const productRoutes = require('./routes/product-routes');
const saleRoutes = require('./routes/sale-routes');
const createPath = require('./helpers/create-path');

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

const app = express();

app.set('view engine', 'ejs');

mongoose
    .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => console.log(successMsg('Connected to DB')))
    .catch((error) => console.log(errorMsg(error)));

app.listen(process.env.PORT, (error) => {
    error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${process.env.PORT}`));
});

app.use(express.urlencoded({extends:false}));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('css'));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.redirect('/accounts');
})

app.use(accountRoutes);
app.use(entityRoutes);
app.use(individualRoutes);
app.use(productRoutes);
app.use(saleRoutes);

app.use((req, res) => {
    res
        .status(404)
        .render(createPath('error'));
});