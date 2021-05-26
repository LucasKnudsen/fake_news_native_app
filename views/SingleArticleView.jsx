import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const SingleArticleView = (props) => {
  const { article } = props.route.params;
  return (
    <>
      <Image testID='image' source={{ uri: article.image }} style={styles.image} />
      <View style={styles.container}>
        <Text testID='title' style={styles.header}>{article.title}</Text>
        <Text testID='body' style={styles.body}>{article.body}</Text>
        <Text testID='author' style={styles.author}>{article.author.first_name}{article.author.last_name}</Text>
        <Text testID='category' style={styles.category}>{article.category}</Text>
        <Text testID='date' style={styles.date}>{article.date}</Text>
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