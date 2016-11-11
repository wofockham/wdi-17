$(document).ready(function () {
  // Adds a swatch with the user's colour choice to the palette.
  $('#add_color').on('click', function () {
    var color = $('#color').val();
    var $swatch = $('<div class="swatch"></div>').css('background-color', color);
    $swatch.prependTo('#palette');
  });

  // Make the selected swatch the active color.
  $('#palette').on('click', '.swatch', function () { // Event delegation
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  for (var i = 0; i < 5000; i++) {
    $('#canvas').append('<div class="pixel"/>');
  }

  // Paint pixels on mouseover.
  $('#canvas').on('mouseover', '.pixel', function (event) {
    console.log(event);
    var color = $('.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
