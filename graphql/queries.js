import { gql } from '@apollo/client';


export const BOOK_BY_ID_GQL = gql`
  query GetBookById($bookId: Int!) {
    bookById (bookId: 3) {
      title
      images
      ratings
      book_created_at
      author
    }
  }
`
