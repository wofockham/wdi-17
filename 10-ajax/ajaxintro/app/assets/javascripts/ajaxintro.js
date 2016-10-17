var xhr = new XMLHttpRequest();

$(document).ready(function () {

  $('#fetch').on('click', function () {
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) { return; } // Data is not ready yet.
      $('#output').text( xhr.responseText );
    };

    xhr.open('GET', '/brother');
    xhr.send();
  });

});
