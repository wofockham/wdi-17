var searchFlickr = function (query) {
  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json'
  }).done(function (results) {
    _(results.photos.photo).each(function (p) {
      var url = generateURL(p);
      console.log(url);
    })
  });
};

var generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // Change this for different sizes
    ].join('');
};

$(document).ready(function () {

  $('#search').on('submit', function (e) {

    e.preventDefault(); // This form is going nowhere.
    var query = $('#query').val();
    searchFlickr(query);

  });
});
