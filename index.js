const express = require('express'); 
require('dotenv').config()
const app = express(); 
const port = process.env.PORT || 8080; 
const path = require('path')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/images', function(req, res){
    res.sendFile(path.join(__dirname, '/20220730_174725_0000.png'));
})

app.listen(port, function(){
    console.log("Your app running on port " + port);
})

