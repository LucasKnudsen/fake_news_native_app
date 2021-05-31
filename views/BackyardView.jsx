import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { getLocation } from '../modules/BackyardArticles';
import BackyardArticleCard from '../components/BackyardArticleCard';

const BackyardView = ({ navigation }) => {
  const { backyardArticles } = useSelector((state) => state);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {backyardArticles.length === 0 ? (
        <Text testID='no-backyard-message' style={styles.errorMessage}>
          No backyard available at this moment
        </Text>
      ) : (
        <FlatList
          data={backyardArticles}
          keyExtractor={(article) => article.id.toString()}
          renderItem={({ item }) => {
            return <BackyardArticleCard article={item} navigation={navigation} />;
          }}
        />
      )}
    </View>
  );
};

export default BackyardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111518',
  },
  header: {
    color: 'lightgrey',
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
