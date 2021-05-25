import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import axios from 'axios';
import Article from './components/Article';
import Hero from './components/Hero';

const App = () => {
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    const response = await axios.get(
      'https://fakest-newzz.herokuapp.com/api/articles'
    );
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  let articleList = articles.slice(1).map((article) => {
    return <Article article={article} key={article.id} />;
  });

  return (
    <View style={styles.container}>
      <Hero article={articles[0]} />
      <View>
        <Text style={styles.header}>Most Recent</Text>
      </View>
      <ScrollView>{articleList}</ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111518',
  },
  header: {
    color: 'white',
    textAlign: 'left',
    textTransform: 'uppercase',
    paddingLeft: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CEC269',
  },
});
