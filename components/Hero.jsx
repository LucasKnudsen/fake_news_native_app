import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const Hero = ({ article }) => {
  return (
    <>
      <TouchableOpacity testID='hero-article'>
        {article && (
          <ImageBackground
            style={styles.heroContainer}
            source={{
              uri: article.image,
            }}>
            <View style={styles.content}>
              <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                <Text style={styles.subHeader}>Featured</Text>
                <Text testID='category' style={styles.category}>
                  {article.category}
                </Text>
              </View>
              <Text testID='title' style={{ color: 'white', fontSize: 20 }}>
                {article.title}
              </Text>
            </View>
          </ImageBackground>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroContainer: {
    height: Dimensions.get('window').height * 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#000000a0',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 30,
    width: Dimensions.get('window').width,
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
