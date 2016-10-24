var app = app || {};

// ROUTER //////////////////////////////////////////////////////////////////////
// A mad combination of router and controller
// The router connects a URL with some particular function.
// The router keeps track of the state of the application in the hash fragment.
app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },
  index: function () {
    var appView = new app.AppView({collection: posts});
    appView.render();
  },
  show: function (id) {
    var post = posts.get(id);
    var postView = new app.PostView({model: post});
    postView.render();
  }
});
