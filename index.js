const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index', { title: 'Fabi\'s dumping ground' });
});

app.listen(80, function() {
	console.log('Started server');
});
