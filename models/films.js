const knex = require('../db/knex')

function addfilm(content) {
  return knex('films')
    .insert({ content })
    .returning('*')
    .then(result =>  result)
}

function updatefilm(filmId, content) {
  return knex('films')
    .where({ 'films.id': filmId })
    .update({ content })
    .returning('*')
}

function getOnefilm(filmId) {
  return knex('films')
    .where({
      'films.id': filmId,
    })
    .then(result =>  result)
}

function deletefilm(filmId) {
  return knex('films')
    .where({ 'films.id': filmId })
    .del()
    .returning('*')
    .then(result => result)
}

module.exports = {
  getOnefilm, addfilm, deletefilm, updatefilm
}
