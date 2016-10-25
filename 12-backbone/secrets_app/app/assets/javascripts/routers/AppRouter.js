var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function () {
    var appView = new app.AppView();
    appView.render();

    app.secrets = new app.Secrets();
    app.secrets.fetch();
  }
});
