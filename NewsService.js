const { loadPackageDefinition } = require('@grpc/grpc-js');
const { loadSync } = require('@grpc/proto-loader');

/* news proto path */
const protoPath = './news.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = loadSync(protoPath, options);
const { NewsService } = loadPackageDefinition(packageDefinition);

exports.NewsService = NewsService;
