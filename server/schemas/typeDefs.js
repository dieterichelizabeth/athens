// Import GraphQL Tagged Template Function
const { gql } = require("apollo-server-express");

// Type Definitions
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    testRun: String
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
      bookId: String!
      authors: [String]!
      description: String!
      image: String!
      link: String!
      title: String!
    ): User
    removeBook(bookId: String!): User
  }
`;

// Export TypeDefs
module.exports = typeDefs;
