const http = require("http");
const fs = require('fs');

const port = 9090;
const server = http.createServer(function(req, resp){
    console.log(req.url);

    if(req.url === '/'){
        req.url = '/index.html';
    }

    //data = fs.readFileSync('') 동기

    //콜백을 사용한 비동기처리
    fs.readFile(__dirname + '/public' + req.url, function(error, data){
        resp.writeHead(200, {
            'Contens-Type': 'text/html'
        });
    
        resp.end(data);
    });

});


server.listen(9090, function(){
    console.log("http server running on " + port);
});
