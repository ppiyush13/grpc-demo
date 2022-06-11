const { Server, ServerCredentials } = require("@grpc/grpc-js");
const { NewsService } = require("./NewsService");

const server = new Server();
const news = [
  {
    id: 1,
    title: "Title 1",
    body: "content 1",
    postImage: "postImage1",
  },
  {
    id: 2,
    title: "Title 2",
    body: "content 2",
    postImage: "postImage2",
  },
];

server.addService(NewsService.service, {
  getAllNews(_, cb) {
    cb(null, { news });
  },
});

server.bindAsync(
  "127.0.0.1:13001",
  ServerCredentials.createInsecure(),
  (err, port) => {
    console.log("Server started on port:", port);
    server.start();
  }
);
