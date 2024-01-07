const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const path = require("path");
const { InMemoryLRUCache } = require("@apollo/utils.keyvaluecache");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  cache: new InMemoryLRUCache(),
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create an instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();

  // Integrate our Apollo server with the Express application as middleware i.e. applyMiddleware method to connect Apollo Server to Express
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
