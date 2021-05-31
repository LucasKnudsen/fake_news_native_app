import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BackyardArticleCard = ({ article, navigation }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{article.title}</Text>
    </View>
  );
};

export default BackyardArticleCard;

const styles = StyleSheet.create({
  content: {
    // width: '40%',
    flex: 1,
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: '#CEC269',
    padding: 15,
    margin: 10
    // textAlign: 'center'
  },
  title: {
    color: 'white',
    fontSize:18,
  },
});
