const Individual = require('../models/individual');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error'));
}

const getIndividuals = (req, res) => {
  Individual
    .find()
    .then((individuals) => res.render(createPath('individuals'), {individuals}))
    .catch((error) => handleError(res, error));
}

const getAddIndividual = (req, res) => {
  res.render(createPath('add-individual'));
}

const addIndividual = (req, res) => {
  const {name, date, passport} = req.body;

  const individual = new Individual({name, date, passport});
  individual
    .save()
    .then((result) => res.redirect('/individuals'))
    .catch((error) => handleError(res, error));
}


const deleteIndividual = (req, res) => {
  Individual
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
}

const getEditIndividual = (req, res) => {
  Individual
    .findById(req.params.id)
    .then(individual => res.render(createPath('edit-individual'), { individual }))
    .catch((error) => handleError(res, error));
}

const editIndividual = (req, res) => {
  const { name, date, passport} = req.body;
  const { id } = req.params;
  Individual
    .findByIdAndUpdate(id, { name, date, passport})
    .then((result) => res.redirect(`/individuals`))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getIndividuals,
  getAddIndividual,
  addIndividual,
  deleteIndividual,
  getEditIndividual,
  editIndividual
}