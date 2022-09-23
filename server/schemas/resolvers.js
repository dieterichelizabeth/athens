// Queries and Mutations for Mongoose models
const resolvers = {
  Query: {
    testRun: () => {
      return "tada!!";
    },
  },
};

module.exports = resolvers;
