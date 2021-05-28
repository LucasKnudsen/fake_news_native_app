const rootReducer = (state, action) => {
  const payload = action.payload
  debugger
  switch (action.type) {
    case 'SET_CATEGORY_VIEW':
      return {
        ...state,
        category: payload.category,
        articlesInCategory: payload.articlesInCategory,
      };
  }
  return state;
};

export default rootReducer;
