var thumbnailify = function (video) {
  var videoThumbnail = youtube.generateThumbnailUrl( $(video).attr('href') );
  $(video).append( $('<img>').attr('src', videoThumbnail) );

  $(video).on('click', function () {
    $('#player').hide();

    var embedURL = youtube.generateEmbedUrl( $(video).attr('href') );
    var $embed = $('<iframe width="560" height="315" frameborder="0" allowfullscreen></iframe>');
    $embed.attr('src', embedURL);
    $('#player').html($embed);

    $('#player').fadeIn(4000);

    return false; // This prevents the default behaviour.
  });
};

$('a').each(function () {
  thumbnailify(this);
});
