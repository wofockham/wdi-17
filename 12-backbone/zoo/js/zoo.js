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

})
