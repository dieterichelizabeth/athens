import { gql } from "@apollo/client";

// Requires: { "username": " ", "email": " ", "password": " "}
export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Requires: { "email": " ", "password": " "}
export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Requires token(context)
// Requires: {  "bookId": " ", "authors": " ", "description": " ", "image": " ", "link": " ", "title": " "}
export const SAVE_BOOK = gql`
  mutation Mutation(
    $bookId: String!
    $authors: [String]!
    $description: String!
    $image: String!
    $link: String!
    $title: String!
  ) {
    saveBook(
      bookId: $bookId
      authors: $authors
      description: $description
      image: $image
      link: $link
      title: $title
    ) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;

// Requires token(context)
// Requires: {"bookId": " "}
export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;
