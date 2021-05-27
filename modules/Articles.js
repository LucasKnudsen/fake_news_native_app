import axios from 'axios';

const Articles = {
  async getAllArticles() {
    try {
      const response = await axios.get(
        'https://fakest-newzz.herokuapp.com/api/articles'
      );
      return response.data.articles;
    } catch (error) {
      return 'Something went wrong please try again later';
    }
  },
};
export default Articles;
