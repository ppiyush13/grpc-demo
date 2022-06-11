const { Server, ServerCredentials } = require('@grpc/grpc-js');
const { NewsService } = require('./NewsService');
const { newsAPIs } = require('./NewsAPIs');

const server = new Server();

server.addService(NewsService.service, newsAPIs);

server.bindAsync(
  '127.0.0.1:13001',
  ServerCredentials.createInsecure(),
  (err, port) => {
    console.log('[grpc-server] Server started on port:', port);
    server.start();
  }
);
