import axios from 'axios';
import store from '../state/store/configureStore';

const uri = 'https://fakest-newzz.herokuapp.com/api/articles';
const Articles = {
  async getAll() {
    const response = await axios.get(uri);
    store.dispatch({
      type: 'SET_MAIN_VIEW',
      payload: {
        articles: response.data.articles,
      },
    });
  },
  async getSpecific(id) {
    const response = await axios.get(`${uri}/${id}`);
    store.dispatch({
      type: 'SET_SINGLE_ARTICLE_VIEW',
      payload: {
        article: response.data.article,
      },
    });
  },
  async getInCategory(category) {
    const response = await axios.get(`${uri}/${category}`);
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
