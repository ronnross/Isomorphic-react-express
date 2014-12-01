require('node-jsx').install({ extension: '.jsx' });

var express = require('express'),
    server = express(),
    React = require('react'),
    HelloWorld = require('./elements/HelloWorld.jsx');


server.set('view engine', 'ejs');

server.use('/public', express.static(__dirname + '/public'));
server.use('/build', express.static(__dirname + '/build'));

server.get('/', function(req, res) {
  var serverElement = React.renderToString(
                        React.createElement(HelloWorld, null)
                      );
  res.render('pages/index',
    {title: "Isomorphic Example",
    serverElement: serverElement});
});

server.get('/api/:location', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.json({caller: req.params.location});
});


server.listen(3000);
console.log('server is listening at localhost:3000');
