var app = app || {};

// VIEW ////////////////////////////////////////////////////////////////////////
// A view shows some particular data AND handles any events to allow interaction
app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    // Set up the page
    var appViewTemplate = $('#appView').html();
    this.$el.html( appViewTemplate );
    // Create a new view for each of the posts.
    this.collection.each(function (p) {
      var postListView = new app.PostListView({model: p});
      postListView.render();
    });
  }
});
