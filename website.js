const https = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const server = https.createServer((req, res) => {
  console.log(req.url);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.end("<h1>this is heading</h1> <p>this is paragrap</p>");
  }
  else if (req.url == "/about") {
   const data = fs.readFileSync('index.html');
   res.end(data.toString);
 }
 else{
  res.statusCode == 404
  res.end("<h1>not found</h1> <p>this is paragrap</p>");

 }
 
});
server.listen(port, () => {
  console.log(port);
});
