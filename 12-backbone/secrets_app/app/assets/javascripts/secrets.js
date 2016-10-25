var router = new app.AppRouter();

$(document).ready(function () {
  Backbone.history.start();

  // Fetch initial secrets
  app.secrets = new app.Secrets();
  app.secrets.fetch();

  // And keep fetching more every second
  setInterval(function () {
    app.secrets.fetch();
  }, 1000);
});
