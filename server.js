const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const protoPath = "./news.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(protoPath, options);
const newsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
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

server.addService(newsProto.NewsService.service, {
  getAllNews(_, cb) {
    cb(null, news);
  },
});

server.bindAsync(
  "127.0.0.1:13001",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    console.log("Server started on port:", port);
    server.start();
  }
);
