/*

The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

*/

var favouriteMovie = {
  title: 'O Brother! Where Art Thou?',
  duration: 135,
  stars: ['George Clooney', 'That Really Slinty Guy', 'Gillian Welch', 'John Goodman']
};

// var message = movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars.join(', ');

var movieInfo = function (movie) {
  var message = [
    movie.title,
    'lasts for',
    movie.duration,
    'minutes. Stars:',
    movie.stars.join(', ')
  ].join(' ');

  console.log(message);
}

movieInfo( favouriteMovie );
