var app = {
  currentPage: 1,
  endReached: false
  //requestInProgress: false
};

var searchFlickr = function (query) {
  console.log('searchFlickr entered', app);
  //if (app.requestInProgress) { return; }
  if (app.endReached) { return; }
  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  //app.requestInProgress = true;
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    page: app.currentPage++
  }).done(function (results) {
    if (results.photos.page === results.photos.pages) {
      app.endReached = true;
    }
    _(results.photos.photo).each(function (p) {
      var url = generateURL(p);
      var $img = $('<img>', {src: url});
      $img.appendTo('#images');
    });
    //app.requestInProgress = false;
  });
};

var searchFlickrThrottled = _.throttle( searchFlickr, 5000, {trailing: false});

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
    $('#images').empty(); // Remove the previous search results.
    app.currentPage = 1; // Reset the page count.
    app.endReached = false;
    searchFlickr(query);
  });

  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 800) {
      var query = $('#query').val();
      searchFlickrThrottled(query);
    }
  });
});
