var app = app || {};

// MODELS //////////////////////////////////////////////////////////////////////
app.Post = Backbone.Model.extend({
  // Documents the shape of a typical post
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});
