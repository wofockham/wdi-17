var spin = function () {
  var randy = function (ceiling) {
    return parseInt(Math.random() * ceiling);
  }

  $('.wheel').each(function () {
    $(this).html( randy(10) );
  });
};

var checkForWinner = function () {
  var result = $('.wheel').text();
  if (result % 111 === 0) {
    $('.winner').fadeIn(2000);
  } else {
    $('.loser').fadeIn(2000);
  }
};

$(document).ready(function () {
  var timer = null;

  $('#start').on('click', function () {
    $('.winner, .loser').slideUp(1600);
    clearInterval(timer);
    timer = setInterval(spin, 100);
  });

  $('#stop').on('click', function () {
    clearInterval(timer);
    checkForWinner();
  });
});
