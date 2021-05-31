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
    case 'SET_BACKYARD_VIEW':
      debugger;
      return {
        ...state,
        backyardArticles: payload.backyardArticles,
        location: payload.location,
      };
    case 'SET_ERROR':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'RESET_ERROR':
      return {
        ...state,
        errorMessage: '',
      };
    case 'AUTHENTICATE':
      return {
        ...state,
        authenticated: true,
        name: `${payload.first_name} ${payload.last_name}`,
      };
    default: {
      return state;
    }
  }
};

export default rootReducer;
