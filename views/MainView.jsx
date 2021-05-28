import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import Articles from '../modules/Articles';
import Article from '../components/Article';
import Hero from '../components/Hero';

const MainView = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [noArticlesMessage, setNoArticlesMessage] = useState();

  const fetchArticles = async () => {
    const response = await Articles.getAll();
    response.length === 0 ? setNoArticlesMessage(true) : setArticles(response);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <View style={styles.container}>
      {noArticlesMessage ? (
        <Text testID='no-articles-message' style={styles.errorMessage}>
          No articles availibe at this moment
        </Text>
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(article) => article.id}
          renderItem={({ item, index }) => {
            if (index === 0) {
              return (
                <>
                  <Hero article={item} key={item.id} navigation={navigation} />
                  <View>
                    <Text style={styles.header}>Most Recent</Text>
                  </View>
                </>
              );
            } else {
              return (
                <Article article={item} key={item.id} navigation={navigation} />
              );
            }
          }}
        />
      )}
    </View>
  );
};

export default MainView;

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
