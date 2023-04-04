import { setLoading } from '../actions/actions';
import { getBookSuccess } from '../book/bookActionsType';
import { GET_ALL_BOOKS_GQL } from '../../graphql/mutations'
import { apolloClient } from '../../graphql/apollo-client'
import { LocalStorageConstants } from '../../constants/localStorageContants'

export const getBooksAction = (params) => (dispatch) => {
  dispatch(setLoading(true));
  return apolloClient
    .mutate({
      mutation: GET_ALL_BOOKS_GQL,
      variables: { getAllBooksArgs: params },
    })
    .then((res) => {
      console.log(res.data)
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
      }
      return
    }
    results.allBooks.push({...book, status: 'want to read'})
  });

  return results
} 