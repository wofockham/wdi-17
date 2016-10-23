// MODELS //////////////////////////////////////////////////////////////////////
var Post = Backbone.Model.extend({
  // Documents the shape of a typical post
  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: ''
  }
});

// Gives us something like an ActiveRecord Relation/Set
// A place to store a bunch of posts with some bonus methods like .get() and .pluck()
var Posts = Backbone.Collection.extend({
  model: Post
});

// seeds.rb: TODO: move these posts to an actual server side database
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

// ROUTER //////////////////////////////////////////////////////////////////////
// A mad combination of router and controller
// The router connects a URL with some particular function.
// The router keeps track of the state of the application in the hash fragment.
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

// VIEW ////////////////////////////////////////////////////////////////////////
// A view shows some particular data AND handles any events to allow interaction
var AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    // Set up the page
    var appViewTemplate = $('#appView').html();
    this.$el.html( appViewTemplate );
    // Create a new view for each of the posts.
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
    // We navigate to a specific URL so that we can share the URL
    // and our friends will see the same content we were looking at.
    // We can also bookmark a specifc URL to return to a specific state.
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
    // Review the _.template docs to see what the hell is going on.
    var postTemplate = $('#postView').html();
    var postMaker = _.template(postTemplate);
    this.$el.html( postMaker(this.model.toJSON()) );
  }
});

// This gives us the ability to use routes.
var router = new Router();

$(document).ready(function () {
  // Kicks off backbone routing and allows us to use the back arrows.
  Backbone.history.start();
});
