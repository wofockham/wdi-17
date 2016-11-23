var Post = Backbone.Model.extend({
  urlRoot: '/posts',
  parse: function (p) {
    p.comments = new Comments(p.comments);
    return p;
  }
});

var Posts = Backbone.Collection.extend({
  model: Post,
  url: '/posts'
});

var Comment = Backbone.Model.extend({
  urlRoot: '/comments'
});

var Comments = Backbone.Collection.extend({
  model: Comment,
  url: '/comments'
});

var posts = new Posts();
posts.fetch();
