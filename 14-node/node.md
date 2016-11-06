#                                                            NODE.JS ORIENTATION
---
## Wat
- Server-side programming language
- Node.js has an event-driven architecture capable of asynchronous I/O.
- Design choices aim to:
  -- optimize throughput and scalability in Web applications
  -- with many input/output operations
  -- as well as for real-time Web applications
  -- (e.g., real-time communication programs and browser games)
---
## Why
### How is "more javascript" the answer to anything?
- People already know javascript
- Full stack JS
- Isomorphic applications
---
## History
- Chrome https://www.google.com/googlebooks/chrome/
- V8
- Ryan Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.
  -- Google's V8 JavaScript engine,
  -- an event loop and
  -- a low-level I/O API.
  -- The project received a standing ovation
- 2010: NPM
- 2014: io.js
- 2014: TJ Holowaychuk leaves Node.js https://medium.com/@tjholowaychuk/farewell-node-js-4ba9e7f3e52b
---
## Pros
- Fast
- Fast I/O
- "Web scale"
- Real time TM
- Popular
- Modular
- ES6
---
## Cons
- Shiny and new
- Everything breaks: leftpad breaks the internet
- Dependency hell
- Popular
- Modular
- ES6
---
## simple server
```
var http = require('http');

const PORT=8888;

// Event handler
var handleRequest = function (request, response) {
    response.end('It Works!! Path Hit: ' + request.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});
```
