import { BookActionsType } from '../book/bookActionsType'

const initialState = {
  allBooks: [],
  readBooks: [],
  readingBooks: []
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

    case BookActionsType.RESET_BOOKS: {
      return {
        ...state,
        allBooks: [],
        readBooks: [],
        readingBooks: []
      };
    }
    
    default:
      return state;
  }
};

export default bookReducer;
