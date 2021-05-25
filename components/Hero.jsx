import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

const Hero = ({ article }) => {
  return (
    <>
      {article && (
        <ImageBackground
          style={styles.heroContainer}
          source={{
            uri: 'https://cdn.mos.cms.futurecdn.net/mYgGsgUeqbMMYbZbTK7uP6.jpg',
          }}>
          <View style={styles.content}>
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <Text style={styles.subHeader}>Featured</Text>
              <Text style={styles.category}>{article.category}</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 20 }}>
              {article.title}
            </Text>
          </View>
        </ImageBackground>
      )}
    </>
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroContainer: {
    height: Dimensions.get('window').height * 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  content: {
    backgroundColor: '#000000a0',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  subHeader: {
    color: '#CEC269',
    textTransform: 'uppercase',
    paddingRight: 15,
  },
  category: {
    color: 'white',
  },
});
