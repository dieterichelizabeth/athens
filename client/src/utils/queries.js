import { gql } from "@apollo/client";

// Requires token(context)
export const QUERY_ME = gql`
  query Me {
    me {
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
