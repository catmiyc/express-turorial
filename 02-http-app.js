const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const stypePage = readFileSync("./navbar-app/styles.css");
const logoPage = readFileSync("./navbar-app/logo.svg");
const browserPage = readFileSync("./navbar-app/browser-app.js");
const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);
  const url = req.url;
  // Home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // style page
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(stypePage);
    res.end();
  }
  // logo page
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logoPage);
    res.end();
  }
  // logic page
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(browserPage);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Error</h1>");
    res.end();
  }
});

server.listen(5000);
