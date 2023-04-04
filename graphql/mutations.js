import { gql } from '@apollo/client';

export const LOGIN_USER_GQL = gql`
  mutation login($getUserArgs : GetUserArgs!) {
    login(
      getUserArgs : $getUserArgs
    ) {
      name
      id
      email
      token
    }
  }
`;

export const REGISTER_USER_GQL = gql`
  mutation register($addUserArgs : AddUserArgs!){
    register(
      addUserArgs : $addUserArgs
    ) {
      name
      id
      email
      token
    }
  }
`
export const ADD_BOOK_GQL = gql`
  mutation addBook($addBookArgs : AddBookArgs!){
    addBook(addBookArgs : $addBookArgs){
      title
      images
      ratings
      book_created_at
      author
    }
  }
`

export const UPDATE_BOOK_GQL = gql`
  mutation updateBook($updateBookArgs : UpdateBookArgs!){
    updateBook(updateBookArgs : $updateBookArgs){
      id
      title
      images
      ratings
      book_created_at
      author
    }
  }
`

export const GET_ALL_BOOKS_GQL = gql`
  mutation allBooks($getAllBooksArgs : GetAllBooksArgs!){
    allBooks(getAllBooksArgs : $getAllBooksArgs){
      book_collection {
        user_id
        book_id
        status
      }
      books {
        id
        title
        author
        description
        images
        ratings
      }
    }
  }
`

export const ADD_COLLECTIONS_GQL = gql`
  mutation addCollection($addCollectionArgs : AddCollectionArgs!){
    addCollection(addCollectionArgs : $addCollectionArgs)
  }
` 

export const UPDATE_COLLECTIONS_GQL = gql`
  mutation updateCollection($updateCollectionArgs : UpdateCollectionArgs!){
    updateCollection(updateCollectionArgs : $updateCollectionArgs)
  }
`



