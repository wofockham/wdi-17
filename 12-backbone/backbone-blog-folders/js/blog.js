// seeds.rb: TODO: move these posts to an actual server side database
var posts = new app.Posts([
  new app.Post({
    id: 1,
    title: 'First Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }),
  new app.Post({
    id: 2,
    title: 'Something About Startups',
    content: 'This startup got angel investment and you will not believe what happened next'
  })
]);

// This gives us the ability to use routes.
var router = new app.Router();

$(document).ready(function () {
  // Kicks off backbone routing and allows us to use the back arrows.
  Backbone.history.start();
});
