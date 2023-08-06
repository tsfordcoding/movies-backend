# Thinkful Bootcamp Capstone Project - WeLoveMovies

### Frontend Deployed: https://welovemovies-9quk.onrender.com/

### Backend Deployed: https://welovemovies-hx63.onrender.com

This repository includes the code for the Backend API of an application called WeLoveMovies.

The Backend API is built using:
- Node.js
- Express.js
- PostgreSQL
- Knex.js

## Routes included in the API:

### Movies

#### `/movies`
- `GET` Returns all columns of each movie located in the database. 

#### `/movies?is_showing=true`
- `GET` Returns all columns of each movie located in the database that is currently showing.

#### `/movies/:movieId`
- `GET` Returns all columns of the specified movie id.

#### `/movies/:movieId/theaters`
- `GET` Returns all the colums of theaters a movie is currently playing at specified by the movie id.

#### `/movies/:movieId/reviews`
- `GET` Returns all the colums of reviews, including critic informations, for the specified movie id.

### Theaters

#### `/theaters`
- `GET` Returns all colums of theaters with information about movies playing at each theater.

### Reviews

#### `/reviews/:reviewId`
- `PUT` Updates data for the requested review and returns all colums of that review as well as critic information for that review.
-  `DELETE` Deletes requested review from the database.

### To Run Locally:

1. Fork and clone the repository to your local device.
2. Run `npm install`
3. Make sure you setup a database to store the information from the API.
4. Make sure to create an environment variable file `.env` for your database url.
5. Run `npm run start:dev` to keep the server running for testing and development purposes.
