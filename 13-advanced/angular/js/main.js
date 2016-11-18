$(document).ready(function () {
  $('input').on('keyup', function () {
    var name = $(this).val();
    $('h1').text('Hello ' + name);
  });
});
