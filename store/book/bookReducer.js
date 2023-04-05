import { BookActionsType } from '../book/bookActionsType'

const initialState = {
  allBooks: [],
  readBooks: [],
  readingBooks: [],
  book: null,
  isBookFetch: false
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
        isBookFetch: true,
        book: action.payload
      };
    }

    case BookActionsType.UPDATE_BOOK: {
      return {
        ...state,
        book: action.payload
      };
    }

    case BookActionsType.RESET_BOOK_FETCH: {
      return {
        ...state,
        isBookFetch: action.payload,
      };
    }

    case BookActionsType.RESET_BOOKS: {
      return {
        ...state,
        readBooks: [],
        readingBooks: [],
        book: null,
        isBookFetch: false
      };
    }
    
    default:
      return state;
  }
};

export default bookReducer;
