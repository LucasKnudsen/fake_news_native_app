import axios from 'axios';

const uri = 'https://fakest-newzz.herokuapp.com/api/articles';
const Articles = {
  async getAll() {
    const response = await axios.get(uri);
    return response.data.articles;
  },
  async getSpecific(id) {
    const response = await axios.get(`${uri}/${id}`);
    return response.data.article;
  },
  async getInCategory(category) {
    const response = await axios.get(`${uri}/${category}`);
    return response.data.articles;
  },
};
export default Articles;
