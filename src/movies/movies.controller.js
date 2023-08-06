const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const movieExists = async (req, res, next) => {
    const movie = await moviesService.read(req.params.movieId);

    if(movie) {
        res.locals.movie = movie;
        return next();
    }

    next({
        status: 404,
        message: `Movie cannot be found`,
    });
}

const read = async (req, res, next) => {
    const { movie: data } = res.locals;
    res.json({ data });
}

const readTheatersByMovieId = async (req, res, next) => {
    res.json({ data: await moviesService.readTheatersByMovieId(res.locals.movie.movie_id) });
}

const readReviewsByMovieId = async (req, res, next) => {
    res.json({ data: await moviesService.readReviewsByMovieId(res.locals.movie.movie_id) });
}

const list = async (req, res, next) => {
  if (req.query) {
    req.query.is_showing === "true" &&
      res.json({ data: await moviesService.listShowing() });
  }
  res.json({ data: await moviesService.list() });
};

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  readTheatersByMovieId: [asyncErrorBoundary(movieExists), asyncErrorBoundary(readTheatersByMovieId)],
  readReviewsByMovieId: [asyncErrorBoundary(movieExists), asyncErrorBoundary(readReviewsByMovieId)],
};
