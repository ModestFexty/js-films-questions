const numberOfFilms = +prompt('Сколько фильмов посмотрели?');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
const answer = prompt('Один из последних просмотренных фильмов?');
const rate = prompt('На скольео оцениваете?');
personalMovieDB.movies[answer] = rate;
console.log(personalMovieDB);
