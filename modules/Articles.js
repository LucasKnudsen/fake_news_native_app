import axios from 'axios';
import store from '../state/store/configureStore';

const Articles = {
  async index() {
    const response = await axios.get('/articles');
    store.dispatch({
      type: 'SET_MAIN_VIEW',
      payload: {
        articles: response.data.articles,
      },
    });
  },
  async show(id) {
    const response = await axios.get(`/articles/${id}`);
    store.dispatch({
      type: 'SET_SINGLE_ARTICLE_VIEW',
      payload: {
        article: response.data.article,
      },
    });
  },
  async getInCategory(category) {
    const response = await axios.get(`/articles/?category=${category}`);
    store.dispatch({
      type: 'SET_CATEGORY_VIEW',
      payload: {
        category: category,
        articlesInCategory: response.data.articles,
      },
    });
  },
};
export default Articles;
