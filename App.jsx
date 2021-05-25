import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
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
  debugger
  const fetchArticles = async () => {
    const response = await axios.get(
      'https://fakest-newzz.herokuapp.com/api/articles'
      );
      setArticles(response.data.articles);
    };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{ uri: articles[0].image }} style={styles.image} />
        <View style={styles.card}>
          <Text style={styles.title}>{articles[0].title}</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={articles.slice(1)}
        renderItem={({ item }) => {
          return <Article article={item} />;
        }}
      />
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
