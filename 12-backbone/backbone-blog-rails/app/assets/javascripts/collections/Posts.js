var app = app || {};

// Gives us something like an ActiveRecord Relation/Set
// A place to store a bunch of posts with some bonus methods like .get() and .pluck()
app.Posts = Backbone.Collection.extend({
  url: '/posts',
  model: app.Post
});
