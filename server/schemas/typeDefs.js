// Import GraphQL Tagged Template Function
const { gql } = require("apollo-server-express");

// Type Definitions
const typeDefs = gql`
  type Query {
    testRun: String
  }
`;

// Export TypeDefs
module.exports = typeDefs;
