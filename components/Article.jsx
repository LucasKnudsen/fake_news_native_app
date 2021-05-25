import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Article = ({ article }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>
          {article.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },

  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
});
