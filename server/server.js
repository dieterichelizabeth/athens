const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
// const path = require("path");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// Create an instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  // Start the server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  // applyMiddleware method to connect Apollo Server to Express - very important
  // the Apollo Playground will not run without this!
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);

      // Apollo Playground link to test GraphQL setup
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath} `
      );
    });
  });
};

startApolloServer();

// https://studio.apollographql.com/sandbox/explorer
