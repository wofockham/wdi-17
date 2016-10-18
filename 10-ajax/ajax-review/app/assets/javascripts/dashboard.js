$(document).ready(function () {
  setInterval(function () {

    $.ajax('/info').done(function (result) {
      $('#time').text( result.time );
      $('#uptime').text( result.uptime );
    }).done(function (info) {
      console.log(info.fortune);
    });

  }, 4000);
});
