
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.static('public'));

var multer  =   require('multer');  


app.get('/login', function (req, res) {
  
        username = req.query['username'],
        password =  req.query['password']
    
    console.log(username);
    // res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>'); 
    // res.end(JSON.stringify(response));

    // if (username == 'admin' && password == 'admin') {
    if (true) {
        res.json({status:true,message:'Successfully Logged In...!!!'})
    }else{
        res.json({status:false,message:'Authentication Failure...!!!'})
    }
    
    //res.send('<p>Firstname: ' + req.query['firstname'] + '</p>  <p>Lastname: ' + req.query['lastname'] + '</p><p>Password: ' + req.query['password'] + '</p> <p>AboutYou: ' + req.query['aboutyou'] + '</p>');
    

})


//********************************** Server Setup ********************************/

var server = app.listen(8000, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);



});