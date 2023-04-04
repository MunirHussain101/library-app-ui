import { BookActionsType } from '../book/bookActionsType'

const initialState = {
  allBooks: [],
  readBooks: [],
  readingBooks: [],
  book: null
};

const bookReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {

    case BookActionsType.GET_BOOKS_SUCCESS: {
      return {
        ...state,
        allBooks: action.payload.allBooks,
        readBooks: action.payload.readBooks,
        readingBooks: action.payload.readingBooks
      };
    }

    case BookActionsType.GET_BOOK_SUCCESS: {
      return {
        ...state,
        book: action.payload
      };
    }

    case BookActionsType.UPDATE_BOOK: {
      return {
        ...state,
        book: action.payload
      };
    }

    case BookActionsType.RESET_BOOKS: {
      return {
        ...state,
        allBooks: [],
        readBooks: [],
        readingBooks: [],
        book: null
      };
    }
    
    default:
      return state;
  }
};

export default bookReducer;
