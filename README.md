# athens 🍄

Athens is an application (using [Google Books API](https://developers.google.com/books)) where users can search for books, and create an account to save books to their reading list! 📚

For this project, I used a functioning Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with Apollo Server- making the application more performant. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.

## Screenshots

<img width="485" alt="Screen Shot 2022-09-24 at 10 56 57 PM" src="https://user-images.githubusercontent.com/95142863/192127675-9286d161-d064-4c72-a322-f1258fd77a74.png">

<img width="486" alt="Screen Shot 2022-09-24 at 10 57 24 PM" src="https://user-images.githubusercontent.com/95142863/192127676-37a010cb-97a3-4f64-bc0e-5ec30cc7306f.png">

## Run Locally

1. Clone the repository

2. Install packages

```
npm i
```

3. Start the Development Server

```
npm run develop
```

## Process

To complete this project, I-

- Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
- Modified the existing authentication middleware so that it works in the context of a GraphQL API.
- Created an Apollo Provider so that requests can communicate with an Apollo Server.

## Documentation

- [jwt.io](https://jwt.io/)
- [Apollo Resolvers](https://www.apollographql.com/docs/apollo-server/data/resolvers/)
- [Input Types](https://www.apollographql.com/docs/apollo-server/schema/schema/#input-types)
- [GraphQL Schemas](https://graphql.org/learn/schema/)
- [Input Types Apollo Blog](https://www.apollographql.com/blog/graphql/basics/input-types-and-client-caching/)
- [Getting Started - Apollo Client](https://www.apollographql.com/docs/react/get-started/)
- [Queries and Mutations - GraphQL](https://graphql.org/learn/queries/)
- [Apollo Server - Express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express)
