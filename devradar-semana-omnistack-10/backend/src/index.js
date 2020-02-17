const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://joacyms:bancomongojoacy13@cluster0-355hd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros: 
// Query params: request.query (filtros, ordenação, paginação, ...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para a criação ou alteração de um registro)

// MongoDB (Não-relacional)

server.listen(3333);