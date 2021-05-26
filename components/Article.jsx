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
    <TouchableOpacity style={styles.row}>
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: '#CEC269', fontSize: 10 }}>
            By {article.author.first_name} {article.author.last_name}
          </Text>
          <Text style={{ color: '#CEC269', fontSize: 10 }}>{article.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 15,
  },

  image: {
    height: 100,
    width: 100,
  },
});
