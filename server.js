const express = require('express');
const app = express();
const server = require('http').Server(app);

const ChatServer = require("react-chat-server");
const chat = new ChatServer(server);

app.set('port', (process.env.PORT || 3000));

app.use(chat.expressMiddleware());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(app.get('port'), () => {
  console.log('Chat server up and running at localhost:' + app.get('port'));
});
