import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Article from '../components/Article';
import Articles from '../modules/Articles';

const ViewByCategory = (props) => {
  let category = props.route.params.category;
  const [articles, setArticles] = useState([]);
  const [noArticlesMessage, setNoArticlesMessage] = useState();

  const fetchArticles = async () => {
    const response = await Articles.getInCategory(category);
    response[0] ? setArticles(response) : setNoArticlesMessage(true);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <View style={styles.container}>
      {noArticlesMessage ? (
        <Text testID='no-articles-message' style={styles.errorMessage}>
          No articles available at this moment
        </Text>
      ) : (
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
      )}
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
  errorMessage: {
    fontSize: 18,
    marginTop: '100%',
    textAlign: 'center',
    color: '#CEC269',
  },
});
