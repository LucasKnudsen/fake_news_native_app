import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import Articles from '../modules/Articles';
import Article from '../components/Article';
import Hero from '../components/Hero';

const MainView = ({ navigation }) => {
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    Articles.index();
  }, []);

  return (
    <View style={styles.container}>
      {articles.length === 0 ? (
        <Text testID='no-articles-message' style={styles.errorMessage}>
          No articles available at this moment
        </Text>
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(article) => article.id.toString()}
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
                <Article article={item} navigation={navigation} />
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
