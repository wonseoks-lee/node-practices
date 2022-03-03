const connect = require("connect");
const serveStatic = require("serve-static");
const connectRoute = require('connect-route');

const port = 9090;
const app = connect();

// router를 실어서 보내준다
app.use(connectRoute(function(router){
    router.get("/", function(req, resp){
        resp.writeHead(200, {
            'Contens-Type': 'text/html'
        });
    
        resp.end("<h1>Main</h1>");
    });
    router.get("/user", function(req, resp){
        resp.writeHead(200, {
            'Contens-Type': 'text/html'
        });
    
        resp.end("<h1>User</h1>");
    });
}));
// 정적자원은 servceStatic에게 맡기겠다
app.use(serveStatic(__dirname + "/public"));
app.listen(9090, function(){
    console.log("http server running on " + port);
});
