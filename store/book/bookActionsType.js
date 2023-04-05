export const BookActionsType = {
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  RESET_BOOKS: 'RESET_BOOKS',
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  UPDATE_BOOK: 'UPDATE_BOOK',
  RESET_BOOK_FETCH: 'RESET_BOOK_FETCH'
};

export const getBookSuccess = (books) => {
  return {
    type: BookActionsType.GET_BOOKS_SUCCESS,
    payload: books,
  };
};

export const resetBooksState = () => {
  return {
    type: BookActionsType.RESET_BOOKS
  };
};

export const getSelectedBookSuccess = (params) => {
  return {
    payload: params,
    type: BookActionsType.GET_BOOK_SUCCESS
  };
};

export const updateBook = (params) => {
  return {
    payload: params,
    type: BookActionsType.UPDATE_BOOK
  };
};

export const resetBookFetch = (params) => {
  return {
    payload: params,
    type: BookActionsType.RESET_BOOK_FETCH
  };
};