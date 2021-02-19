const express = require('express')

const app = express()

app.get("/",function(req,res){
    res.send("Hello World")
})

//query string localhost:9000/raja?id=20
app.get('/raja',function(req,res){
    const id = req.query.id
    res.send("Hello Raja from query "+id)
})

// param  localhost:9000/raja/20

app.get("/raja/:id",function(req,res){
    const id = req.params.id
    res.send("Hello Raja from params " +id )
})

app.listen(9000,function(req,res){
    console.log("Server is running at port : 9000")
})