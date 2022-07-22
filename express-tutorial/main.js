var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('Hello World');
})

app.listen(3000, function(){
    console.log('Example App is listening on port 3000.')
});

app.get('/user/:id', function(req, res) {
    res.send('Received a GET request, param:' + req.params.id);
});

app.post('/user', function(req, res) {
    res.send('Received a POST request');
    res.json({ success: true })
});

app.put('/user', function(req, res) {
    res.send('Received a PUT request');
    res.status(400).json({ message: 'Hey, You. Bad Request!'})
});

app.delete('/user', function(req, res) {
    res.send('Received a DELETE request');
});