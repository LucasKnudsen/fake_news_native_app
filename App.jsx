import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios'
import Article from './components/Article'

const App = () => {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    const response = await axios.get('https://fakest-newzz.herokuapp.com/api/articles')
    setArticles(response.data.articles)
  }

  useEffect(() => {
    fetchArticles()
  }, [])


  return (
    <View style={styles.container}>
      <FlatList 
      data={articles}
      renderItem={({item}) => {
        return <Article article={item} />
      }}
      />
      <Text>Hello Boo</Text>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
