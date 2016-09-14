var body = document.getElementsByTagName('body')[0];
body.style.fontFamily = 'Arial, sans-serif';


var nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

var favorites = document.getElementById('favorites');
favorites.innerHTML = 'Groucho, scotch, kittens';

document.getElementById('hometown').innerHTML = 'Sydney';


var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[ i ].className = 'listitem';
}


var image = document.createElement('img'); // Creates <img>
image.src = 'http://fillmurray.com/333/444';
body.appendChild(image);
