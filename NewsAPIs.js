const news = [
  {
    id: 1,
    title: 'Title 1',
    body: 'content 1',
    postImage: 'postImage1',
  },
  {
    id: 2,
    title: 'Title 2',
    body: 'content 2',
    postImage: 'postImage2',
  },
];

exports.newsAPIs = {
  getAllNews(_, cb) {
    cb(null, { news });
  },

  addNews({ request }, cb) {
    const newsInstance = { ...request, id: Date.now() };
    news.push(newsInstance);

    cb(null, { news });
  },

  deleteNews({ request }, cb) {
    const newsIndex = news.findIndex(({ id }) => id === parseInt(request.id));
    if (newsIndex !== -1) news.splice(newsIndex, 1);

    cb(null, { news });
  },
};
