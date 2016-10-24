// Replace the default ERB style template tags with Handlebars style
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var posts = new app.Posts();

// This gives us the ability to use routes.
var router = new app.Router();


$(document).ready(function () {
  if ($('#main').length === 0) {
    return; // Bail out if we are not on the actual Backbone page.
  }

  posts.fetch().done(function () {  // Asynchronous request
    // We can't start the router until a) the DOM is ready and b) our posts are fetch()ed.
    // Kicks off backbone routing and allows us to use the back arrows.
    Backbone.history.start();
  });
});
