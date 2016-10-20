// Model: //////////////////////////////////////////////////////////////////////
var Animal = Backbone.Model.extend({
  initialize: function () {
    console.log('a brand new animal was created');

    // Watcher
    this.on('change:name', function (model) {
      var newName = model.get('name');
      console.log('My new name is ' + newName);
    });
  },
  defaults: {
    name: 'Some Animal',
    ecosystem: '',
    stripes: 0
  }
});


// Collection: /////////////////////////////////////////////////////////////////
var Zoo = Backbone.Collection.extend({
  model: Animal,
  initialize: function () {
    console.log('New zoo created');
    this.on('add', function () {
      console.log('New animal added to the zoo');
    });
  }
});

var f = new Animal({name: 'Freddo Frog', ecosystem: 'pond'});
var t = new Animal({name: 'Tiger', ecosystem: 'under the bed'});
var b = new Animal({name: 'Monty the Monarch', ecosystem: 'widespread'});

var gaZoo = new Zoo( [ f, t, b ] );


// Views: //////////////////////////////////////////////////////////////////////
var ZooView = Backbone.View.extend({
  el: '#main', // jQuery style selector for where this should appear on the page.
  events: {
    'click h2': 'thanker'
  },
  initialize: function () {
    console.log('view is initialized');
  },
  thanker: function () {
    alert('Thank you for clicking');
  },
  render: function () {
    var view = this; // Give `this` a sensible name while we know what it is.
    view.collection.each(function (animal) {
      var name = animal.get('name');
      var $h2 = $('<h2/>').text(name); // TODO: Templates
      view.$el.append( $h2 );
    });
  }
});

$(document).ready(function () {
  var v = new ZooView({collection: gaZoo});
  v.render();
});
