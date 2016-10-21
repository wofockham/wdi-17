var Post = Backbone.Model.extend({
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});

var Posts = Backbone.Collection.extend({
  model: Post
});

// seeds.rb
var posts = new Posts([
  new Post({
    id: 1,
    title: 'First Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }),
  new Post({
    id: 2,
    title: 'Something About Startups',
    content: 'This startup got angel investment and you will not believe what happened next'
  })
]);


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'show'
  },
  index: function () {
    var appView = new AppView({collection: posts});
    appView.render();
  },
  show: function (id) {
    var post = posts.get(id);
    var postView = new PostView({model: post});
    postView.render();
  }
});


var AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var appViewTemplate = $('#appView').html();
    this.$el.html( appViewTemplate );
    this.collection.each(function (p) {
      var postListView = new PostListView({model: p});
      postListView.render();
    });
  }
});

var PostListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showPost'
  },
  showPost: function () {
    router.navigate('posts/' + this.model.get('id'), true);
  },
  render: function () {
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  }
});

var PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postTemplate = $('#postView').html();
    var postMaker = _.template(postTemplate);
    this.$el.html( postMaker(this.model.toJSON()) );
  }
});

var router = new Router();

$(document).ready(function () {
  Backbone.history.start();
});
