const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const TripAPI = require('./trip-rest-consumer');
const resolvers = require('./resolvers');

const dataSources = () => ({
  tripAPI: new TripAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen().then(({ url }) => {
  console.info(`Server is listening on ${url} 🎉`);
});