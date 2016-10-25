var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: '/secrets',
  model: app.Secret,
  initialize: function () {
    this.on('add', function (s) {
      // Self rendering secrets
      var secretView = new app.SecretView({model: s});
      secretView.render();
    });
  }
})
