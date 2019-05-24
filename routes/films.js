const express = require('express')
const router = express.Router()
const filmsCtrl = require('../controllers/films')

router.get('/:filmId', filmsCtrl.getOneFilm)
router.delete('/:filmId', filmsCtrl.deleteFilm)
router.put('/:filmId', filmsCtrl.updatefilm)

module.exports = router
