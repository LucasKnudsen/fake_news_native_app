import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import axios from 'axios';

const SingleArticleView = (props) => {
  const { article } = props.route.params;
  const [singleArticle, setSingelArticle] = useState({});

  const fetchArticle = async () => {
    const response = await axios.get(
      `https://fakest-newzz.herokuapp.com/api/articles/${article.id}`
    );
    setSingelArticle(response.data.article);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <Image
        testID="image"
        source={{ uri: singleArticle.image }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text testID="title" style={styles.header}>
          {singleArticle.title}
        </Text>
        <Text testID="body" style={styles.body}>
          {singleArticle.body}
        </Text>
        <Text testID="author" style={styles.author}>
          {article.author.first_name} {article.author.last_name}{' '}
        </Text>
        <Text testID="category" style={styles.category}>
          {singleArticle.category}
        </Text>
        <Text testID="date" style={styles.date}>
          {singleArticle.date}
        </Text>
      </View>
    </>
  );
};

export default SingleArticleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 25,
  },
  body: {
    fontSize: 20,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
});
