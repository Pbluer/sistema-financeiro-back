const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const Router = require('./Router/Router')
var app = new express();

app.use( cors() )
app.use( bodyParser.urlencoded( { extended: true }) )
app.use( bodyParser.json() )
app.use( Router )

app.listen( 8081,() => console.log('Servidor rodando.') )