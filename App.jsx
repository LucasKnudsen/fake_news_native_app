import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import Article from './components/Article';

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

  let articleCard = articles.map((article, index) => {
    return <Article article={article} index={index} key={index} />;
  });

  return (
    <View contentContainerStyle={styles.container}>
      <ScrollView >
        <TouchableOpacity>{articleCard}</TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
  card: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
