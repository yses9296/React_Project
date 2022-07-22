var express = require('express');
var router = express.Router();


router.get('/:id', function(req, res) {
    res.send('Received a GET request, param:' + req.params.id);
});

router.post('/', function(req, res) {
    res.send('Received a POST request');
    res.json({ success: true })
});

router.put('/', function(req, res) {
    res.send('Received a PUT request');
    res.status(400).json({ message: 'Hey, You. Bad Request!'})
});

router.delete('/', function(req, res) {
    res.send('Received a DELETE request');
});

module.exports = router;