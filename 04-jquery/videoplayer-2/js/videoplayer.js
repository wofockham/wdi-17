/*
Create an array of every link on the page using document.querySelectorAll(cssSelector)
Iterate through the array. In each iteration of the loop:

Find the current href using element.getAttribute(name), and store into a variable
Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
Create an IMG element using document.createElement(tagName)
Set the "src" of the IMG element using element.setAttribute(name, value)
Append the IMG to the link using element.appendChild(element)
*/

$('a').each(function () {
    var videoThumbnail = youtube.generateThumbnailUrl( $(this).attr('href') );
    $(this).append( $('<img>').attr('src', videoThumbnail) );
});

// More verbose jQuery version:
// var $videos = $('a');
//
// $videos.each(function (i, video) {
//   var videoURL = $(video).attr('href');
//   var videoThumbnail = youtube.generateThumbnailUrl( videoURL );
//
//   var $thumbnail = $('<img>').attr('src', videoThumbnail); // Chaining
//   $thumbnail.appendTo(video); // // $(video).append($thumbnail);
// });
