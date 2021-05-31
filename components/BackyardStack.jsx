import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import MainView from '../views/MainView';
import SingleArticleView from '../views/SingleArticleView';
import SingleCategoryView from '../views/SingleCategoryView';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import LoginView from '../views/LoginView';
import store from '../state/store/configureStore';

const Stack = createStackNavigator();

const BackyardStack = () => {
  const { category } = useSelector((state) => state);
  

  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#111518',
        },
        headerTintColor: '#CEC269',
      })}>
      <Stack.Screen
        name='backyard-home'
        component={BackyardView}
        options={({ navigation }) => ({
          title: 'BACKYARD',
          headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <AntDesign
              name='menu-fold'
              style={{ color: '#CEC269', paddingLeft: 15 }}
              size={24}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        })}
      />
     
      <Stack.Screen
        name='backyard-article'
        component={BackyardArticleView}
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
    </Stack.Navigator>
  );
};

export default BackyardStack;
