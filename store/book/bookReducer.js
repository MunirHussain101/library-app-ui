
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
    
    default:
      return state;
  }
};

export default bookReducer;
