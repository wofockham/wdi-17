var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    // Review the _.template docs to see what the hell is going on.
    var postTemplate = $('#postView').html();
    var postMaker = _.template(postTemplate);
    this.$el.html( postMaker(this.model.toJSON()) );
  }
});
