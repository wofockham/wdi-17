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


var AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var appViewTemplate = $('#appView').html();
    this.$el.html( appViewTemplate );
  }
});

$(document).ready(function () {
  var appView = new AppView();
  appView.render();
});
