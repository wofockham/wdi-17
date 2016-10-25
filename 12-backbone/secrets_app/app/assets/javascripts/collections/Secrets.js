var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: '/secrets',
  model: app.Secret,
  initialize: function () {
    // Self rendering secrets
    // The collection will render each new secret as it joins the collection.
    this.on('add', function (s) {
      var secretView = new app.SecretView({model: s});
      secretView.render();
    });
  }
})
