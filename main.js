let http = require("http");
let fs = require('fs');
let url = require("url");
http.createServer(function (request, response) {
  
  let pathname = url.parse(request.url).pathname;

  // 首页
  if (pathname === '/') {

    fs.readFile('./index.html', 'utf-8',function (err, data) {
      if (err) throw err;
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
    });
  }

  // 新窗口
  if (pathname === '/new_img.html') {

    fs.readFile('./new_img.html', 'utf-8',function (err, data) {
      if (err) throw err;
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
    });
  }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
