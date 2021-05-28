import React from 'react';
import MainView from '../views/MainView';
import SingleArticleView from '../views/SingleArticleView';
import SingleCategoryView from '../views/SingleCategoryView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Navigator = () => {
  const category = useSelector((state) => state.category);
  debugger
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={MainView}
          options={() => ({
            ...screenOptions,
            title: 'Fake ? News',
          })}
        />
        <Stack.Screen
          name='single article'
          component={SingleArticleView}
          options={() => ({
            ...screenOptions,
            headerTitleStyle: {
              textAlign: 'left',
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name='single category view'
          component={SingleCategoryView}
          options={() => ({ ...screenOptions, title: category })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const screenOptions = {
  headerBackTitle: 'Back',
  title: 'Back',
  headerStyle: {
    backgroundColor: '#111518',
  },
  headerTintColor: '#CEC269',
  headerTitleStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
};
