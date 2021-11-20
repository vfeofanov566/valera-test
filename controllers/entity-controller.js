const Entity = require('../models/entity');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error'));
}

const getEntities = (req, res) => {
  const title = 'Юридическое лицо';
  Entity
    .find()
    .then((entities) => res.render(createPath('entities'), {entities, title}))
    .catch((error) => handleError(res, error));
}

const getAddEntity = (req, res) => {
  const title = 'Добавление клиента';
  res.render(createPath('add-entity'), {title});
}

const addEntity = (req, res) => {
  const {name, tpin} = req.body;
  const entity = new Entity({name, tpin});
  entity
    .save()
    .then((result) => res.redirect('/entities'))
    .catch((error) => handleError(res, error));
}


const deleteEntity = (req, res) => {
  Entity
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
}

const getEditEntity = (req, res) => {
  const title = 'Юридическое лицо';
  Entity
    .findById(req.params.id)
    .then(entity => res.render(createPath('edit-entity'), { entity, title }))
    .catch((error) => handleError(res, error));
}

const editEntity = (req, res) => {
  const { name, tpin} = req.body;
  const { id } = req.params;
  Entity
    .findByIdAndUpdate(id, { name, tpin})
    .then((result) => res.redirect(`/entities`))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getEntities,
  getAddEntity,
  addEntity,
  deleteEntity,
  getEditEntity,
  editEntity
}