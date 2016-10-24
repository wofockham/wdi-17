var app = app || {};

app.PostListView = Backbone.View.extend({
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
