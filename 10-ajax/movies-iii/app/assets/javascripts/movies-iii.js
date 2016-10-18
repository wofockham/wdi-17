$(document).ready(function () {
  $('#movie_search').on('submit', function (e) {
    e.preventDefault();

    var title = $('#title').val();

    // Request data on that title from omdb
    var url = 'http://omdbapi.com/?t=' + title;

    $.ajax(url).done(function (info) {
      var $img = $('<img>', {src: info['Poster'], title: info['Title']});
      $img.prependTo('#posters');
    });

  });
});
