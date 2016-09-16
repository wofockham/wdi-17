$(document).ready(function () {

  $('#frobber').on('click', function (event) {
    console.log(event);
    $('img').slideToggle(1200, function () {
      $('body').css('background-color', 'black');
    });
  });

  $(window).on('mousemove', function (e) {
    // console.log( e );
    console.log( e.clientX, e.clientY );
  });

  $('a').on('click', function (event) {
    // return false; // Don't do the default action of following the link.
    event.preventDefault(); // Don't do the default action of following the link.
  });

  $('h1').funText(500, 'candy');

});
