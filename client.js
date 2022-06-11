const { credentials } = require('@grpc/grpc-js');
const { NewsService } = require('./NewsService');

const client = new NewsService('127.0.0.1:13001', credentials.createInsecure());

// client.addNews(
//   {
//     title: "Title news 3",
//     body: "Body content 3",
//     postImage: "Image URL here",
//   },
//   (error, news) => {
//     if (error) throw error;
//     console.log("Successfully created a news.");
//   }
// );

client.deleteNews(
  {
    id: 1654942829855,
  },
  (error, news) => {
    if (error) throw error;
    console.log('Successfully deleted a news item.');
  }
);

client.getAllNews({}, (err, news) => {
  if (err) console.error(err);
  console.log(news);
});
