$(document).ready(function () {

  var $body = $('body'); // Cached version of the body.

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    $body.css('background-position-y', -scroll / 3);
  });

  $(window).on('mousemove', function (e) {

    var size = Math.random() * 10;

    var $bubble = $('<div class="bubble"/>').css({
      left: e.pageX,
      top: e.pageY,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo($body);

    $bubble.animate({top: -100}, 2000, function () {
      $bubble.remove();
    });
    
  });
});
