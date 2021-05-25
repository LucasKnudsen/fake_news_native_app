import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Article = ({ article }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: article.image }} />
      <View>
        <Text>{article.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({});
