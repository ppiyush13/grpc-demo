const { credentials } = require("@grpc/grpc-js");
const { NewsService } = require("./NewsService");

const client = new NewsService("127.0.0.1:13001", credentials.createInsecure());

client.getAllNews({}, (err, news) => {
  if (err) console.error(err);
  console.log(news);
});
