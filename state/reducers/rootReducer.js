const rootReducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SET_CATEGORY_VIEW':
      return {
        ...state,
        category: payload.category,
        articlesInCategory: payload.articlesInCategory,
      };
    case 'SET_SINGLE_ARTICLE_VIEW':
      return {
        ...state,
        article: payload.article,
      };
    case 'SET_MAIN_VIEW':
      return {
        ...state,
        articles: payload.articles,
      };
  }
  return state;
};

export default rootReducer;
