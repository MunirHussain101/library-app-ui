import { setLoading } from '../actions/actions';
import { getBookSuccess, getSelectedBookSuccess } from '../book/bookActionsType';
import { GET_ALL_BOOKS_GQL, ADD_COLLECTIONS_GQL, UPDATE_COLLECTIONS_GQL, ADD_BOOK_GQL } from '../../graphql/mutations'
import { BOOK_BY_ID_GQL, BOOK_AND_COLLECTION_BY_ID_GQL } from '../../graphql/queries'
import { apolloClient } from '../../graphql/apollo-client'
import { LocalStorageConstants } from '../../constants/localStorageContants'
import { useRouter } from 'next/router';

export const getBooksAction = (params) => (dispatch) => {
  dispatch(setLoading(true));
  return apolloClient
    .mutate({
      mutation: GET_ALL_BOOKS_GQL,
      variables: { getAllBooksArgs: params },
    })
    .then((res) => {
      const { allBooks } = res.data;
      const updRes = processBookList(allBooks)
      dispatch(getBookSuccess(updRes));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err.message || err);
      dispatch(setLoading(false));
    });
};

export const getBookByIdAction = (bookId) => (dispatch) => {
  dispatch(setLoading(true));
  return apolloClient
    .query({
      query: BOOK_BY_ID_GQL,
      variables: { bookId: bookId },
    })
    .then((res) => {
      const { bookById } = res.data;
      dispatch(getSelectedBookSuccess(bookById));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err.message || err);
      dispatch(setLoading(false));
    });
};

export const getBooksByIdAction = (bookId, userId) => (dispatch) => {
  dispatch(setLoading(true));
  return apolloClient
    .query({
      query: BOOK_AND_COLLECTION_BY_ID_GQL,
      variables: { bookId: bookId, userId: userId},
    })
    .then((res) => {
      const { bookCollectionById } = res.data;
      const book = {...bookCollectionById.book, collectionId: bookCollectionById.collection.id, status: bookCollectionById.collection.status}
      dispatch(getSelectedBookSuccess(book));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err.message || err);
      dispatch(setLoading(false));
    });
};

export const addBookToCollection = (params, updBook) => (dispatch) => {
  return apolloClient
    .mutate({
      mutation: ADD_COLLECTIONS_GQL,
      variables: { addCollectionArgs: params },
    })
    .then((res) => {})
    .catch((err) => {
      console.log(err.message || err);
    });
};

export const updateBookCollection = (params, updBook) => (dispatch) => {
  return apolloClient
    .mutate({
      mutation: UPDATE_COLLECTIONS_GQL,
      variables: { updateCollectionArgs: params },
    })
    .then((res) => {})
    .catch((err) => {
      console.log(err.message || err);
    });
};

export const addNewBookAction = (params) => (dispatch) => {
  return apolloClient
    .mutate({
      mutation: ADD_BOOK_GQL,
      variables: { addBookArgs: params },
    })
    .then((res) => {
      const { addBook } = res.data;
      dispatch(getSelectedBookSuccess(addBook));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err.message || err);
    });
};


const processBookList = (booksRes) => {
  const {books, book_collection} = booksRes
  const results = {
    allBooks: [],
    readBooks: [],
    readingBooks: []
  }

  books.forEach(book => {
    const isExistInCollection = book_collection.find((collection) => collection.book_id == book.id)
    if (isExistInCollection) {
      if (isExistInCollection.status == 'read') {
        results.readBooks.push({...book, status: 'read'})

      } else if (isExistInCollection.status == 'reading') {
        results.readingBooks.push({...book, status: 'reading'})
      } else if (isExistInCollection.status == 'want to read') {
        results.allBooks.push({...book, status: 'want to read'})
      }
      return
    }
    results.allBooks.push({...book, status: 'want to read'})
  });

  return results
}