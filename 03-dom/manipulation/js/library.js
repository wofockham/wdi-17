var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }
];


var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul'); // <ul>

for (var i = 0; i < books.length; i++) {
  var book = books[ i ];

  var li = document.createElement('li'); // <li>
  li.innerHTML = book.title + ' by ' + book.author;

  if (book.alreadyRead) {
    li.className = 'alreadyRead';
  }

  ul.appendChild( li );
}

body.appendChild(ul);
