var express = require('express');
var app = express();

app.get('/', function (req, res) {
	//res.send('Esta é uma requisição GET.');
	//res.send(req.query);
	res.send(req.headers);
});

app.post('/users', function(req, res){
	res.send(req.headers);

	// somente recebendo o body
	req.on('data', function(chunk) { 
		//res.send(chunk);
	});

});

app.listen(3000, function () {
	console.log('Este exemplo é apenas para demonstrar como as requisições funcionam em uma aplicação web.');
	console.log('Rodando na porta: 3000. Acesse: http://localhost:3000 ou http://127.0.0.1:3000');
});