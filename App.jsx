import React from 'react';
import MainView from './views/MainView';
import SingleArticleView from './views/SingleArticleView';
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
            title: 'Fake ? News',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#CEC269',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          })}
        />
        <Stack.Screen
        name='single article'
        component={SingleArticleView}
        options={() => ({
          headerBackTitle: 'Back!'
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
