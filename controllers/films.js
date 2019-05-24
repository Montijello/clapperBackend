const model = require('../models/films');

function getOneMovie(req, res, next) {
  model.getOneMovie(req.params.movieId)
  .then((result) => {
    if (!result || result.length === 0)
    return next({
      status: 404,
      message: "movie not found!"
    })
    res.status(200).send(result)
  })
  .catch(next)
};

module.exports = {
  getOneMovie
}
