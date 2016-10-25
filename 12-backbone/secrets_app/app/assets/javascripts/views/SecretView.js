var app = app || {};

app.SecretView = Backbone.View.extend({
  tagName: 'li',
  render: function () {
    var content = this.model.get('content');
    this.$el.text( content ); // What would happen if we used .html instead?
    $('#secrets').prepend( this.el );
  }
});
