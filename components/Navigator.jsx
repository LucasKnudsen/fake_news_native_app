import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import MainView from '../views/MainView';
import SingleArticleView from '../views/SingleArticleView';
import SingleCategoryView from '../views/SingleCategoryView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import LoginView from '../views/LoginView';
import store from '../state/store/configureStore';

const Stack = createStackNavigator();

const Navigator = () => {
  const { category } = useSelector((state) => state);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: '#111518',
          },
          headerTintColor: '#CEC269',
        })}>
        <Stack.Screen
          name='Home'
          component={MainView}
          options={() => ({
            title: 'FAKE ? NEWS',
            headerTitleStyle: {
              textAlign: 'center',
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name='logIn'
          component={LoginView}
          options={({ navigation }) => ({
            title: 'Back',
            headerLeft: () => (
              <AntDesign
                name='arrowleft'
                style={{ color: '#CEC269', paddingLeft: 15 }}
                size={24}
                onPress={() => {
                  navigation.navigate('Home');
                  store.dispatch({ type: 'RESET_ERROR' });
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name='single article'
          component={SingleArticleView}
          options={({ navigation }) => ({
            title: 'Back',
            headerLeft: () => (
              <AntDesign
                name='arrowleft'
                style={{ color: '#CEC269', paddingLeft: 15 }}
                size={24}
                onPress={() => {
                  navigation.navigate('Home');
                  store.dispatch({ type: 'RESET_ERROR' });
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name='single category view'
          component={SingleCategoryView}
          options={() => ({ title: category })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
