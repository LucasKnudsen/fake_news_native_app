import React from 'react';
import MainView from './views/MainView';
import SingleArticleView from './views/SingleArticleView';
import SingleCategoryView from './views/SingleCategoryView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={MainView}
          options={() => ({
            ...screenOptions,
            title: 'Fake ? News',
            headerTitleStyle: {
              textAlign: 'center',
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name='single article'
          component={SingleArticleView}
          options={() => screenOptions}
        />
        <Stack.Screen
          name='single category view'
          component={SingleCategoryView}
          options={() => screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const screenOptions = {
  headerBackTitle: 'Back',
  title: 'Back',
  headerStyle: {
    backgroundColor: '#111518',
  },
  headerTintColor: '#CEC269',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
