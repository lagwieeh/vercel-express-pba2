const express = require('express')
const animalsRouter = express.Router()
// UTILS AND DATA
const {getElementById, getIndexById, updateElement, seedElements, createElement} = require('../utils')
let animals = []
seedElements(animals, 'animals');

// GET
animalsRouter.get('/', (req, res, next) => {
  res.send(animals);
  console.log(animals)
});
animalsRouter.get('/:id', (req, res, next) => {
  const foundAnimal = getElementById(req.params.id, animals);
  if (foundAnimal) {
    res.send(foundAnimal);
  } else {
    res.status(404).send();
  }
});
// PUT
animalsRouter.put('/:id', (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(animals[animalIndex]);
  } else {
    res.status(404).send();
  }
  
});
// POST
animalsRouter.post('/', (req, res, next) => {
  const receivedAnimal = createElement('animals', req.query);
  if (receivedAnimal) {
    animals.push(receivedAnimal);
    res.status(201).send(receivedAnimal);
  } else {
    res.status(400).send();
  }
});
// DELETE
animalsRouter.delete('/:id', (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    animals.splice(animalIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports.animalsRouter = animalsRouter