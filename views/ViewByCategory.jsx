import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Article from '../components/Article';
import axios from 'axios';

const ViewByCategory = (props) => {
  let category = props.route.params.category;
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const response = await axios.get(
      `https://fakest-newzz.herokuapp.com/api/articles/${category}`
    );
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        testID='view-by-category'
        data={articles}
        keyExtractor={(article) => article.id}
        renderItem={({ item }) => {
          return (
            <Article
              article={item}
              key={item.id}
              navigation={props.navigation}
            />
          );
        }}
      />
    </View>
  );
};

export default ViewByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111518',
  },
  header: {
    color: 'lightgray',
    textAlign: 'left',
    textTransform: 'uppercase',
    paddingLeft: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CEC269',
  },
});
