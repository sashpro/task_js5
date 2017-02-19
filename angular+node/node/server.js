const  http = require('http');
const url = require('url');
var fs = require("fs");

http.createServer(function(req, res) {
  var preq = url.parse(req.url);
  var resp_str = '';

  switch (preq.path){
      case '/':
          sendFileContent(res, "../angular/index.html", "text/html;charset=utf-8");
          return;
          break;
      case '/get1':
          resp_str = 'ответ от get_1';
          break;
      case '/get2':
        resp_str = 'ответ от get_2';
        break;
      case '/get3':
        resp_str = 'ответ от get_3';
        break;
      default:
        resp_str = 'url не поддерживается';
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(resp_str);

}).listen(8080);

console.log('Server running on port 8080');

function sendFileContent(response, fileName, contentType){
    fs.readFile(fileName, function(err, data){
        if(err){
            response.writeHead(404);
            response.write("Not Found!");
        }
        else{
            response.writeHead(200, {'Content-Type': contentType});
            response.write(data);
        }
        response.end();
    });
}