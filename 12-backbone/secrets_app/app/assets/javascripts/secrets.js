var router = new app.AppRouter();

$(document).ready(function () {
  Backbone.history.start();

  setInterval(function () {
    app.secrets.fetch();
  }, 1000);
});
