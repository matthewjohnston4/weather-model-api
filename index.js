const { ApolloServer, gql } = require('apollo-server');
const models = require('./data.js');

const typeDefs = gql`
  type RunTime {
    hour: Int
    minute: Int
  }

  type Run {
    label: String
    start: RunTime
    duration: Int
    limit: Int
  }

  type Model {
    name: String
    res: Float
    minFrameSize: Int
    viewLinks: [String]
    runs: [Run]
  }

  type Query {
    models: [Model]
  }
`;

const resolvers = {
  Query: {
    models: () => models,
  },
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  playground: false
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});