import axios from 'axios';

const Articles = {
  async getAll() {
    const response = await axios.get(
      'https://fakest-newzz.herokuapp.com/api/articles'
    );
    return response.data.articles;
  },
};
export default Articles;
