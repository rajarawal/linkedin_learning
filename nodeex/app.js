var http = require('http')

http.createServer(function(req,res){
    // we can header also for more info
    res.writeHead(200,{'content-Type':'text/http'})
    res.write("Hello Greate King !!!")
    res.end()
}).listen(9000)