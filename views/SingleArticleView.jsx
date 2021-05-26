import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const SingleArticleView = (props) => {
  const { article } = props.route.params;
  const [singleArticle, setSingleArticle] = useState({});

  const fetchArticle = async () => {
    const response = await axios.get(
      `https://fakest-newzz.herokuapp.com/api/articles/${article.id}`
    );
    setSingleArticle(response.data.article);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <ScrollView>
      <Image
        testID='image'
        source={{ uri: singleArticle.image }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text testID='title' style={styles.header}>
          {singleArticle.title}
        </Text>
        <Text testID='body' style={styles.body}>
          {singleArticle.body}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 5,
            justifyContent: 'space-between',
          }}>
          <Text testID='author' style={styles.sub}>
            By {article.author.first_name} {article.author.last_name}
          </Text>
          <Text testID='date' style={styles.date}>
            {singleArticle.date}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleArticleView;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#111518',
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
  header: {
    
    padding: 15,
    color: '#CEC269',
    fontSize: 25,
    backgroundColor: '#111518',
  },
  body: {
    color: 'lightgray',
    fontSize: 20,
    padding: 15,
  },
  sub: {
    color: '#CEC269',
    paddingTop: 2,
    paddingLeft: 15,
  },

  date: {
    color: 'gray',
    paddingTop: 2,
    paddingRight: 15,
    textAlign: 'right',
  },
});
