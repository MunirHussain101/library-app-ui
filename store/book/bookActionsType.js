export const BookActionsType = {
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  RESET_BOOKS: 'RESET_BOOKS'
};

export const getBookSuccess = (books) => {
  return {
    type: BookActionsType.GET_BOOKS_SUCCESS,
    payload: books,
  };
}
;
export const resetBooksState = () => {
  return {
    type: BookActionsType.RESET_BOOKS
  };
};