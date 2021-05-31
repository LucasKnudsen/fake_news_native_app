import React from 'react';
import axios from 'axios';
import store from './state/store/configureStore';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './components/HomeStack';

window.store = store;

axios.defaults.baseURL = 'https://fakest-newzz.herokuapp.com/api';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Home'
          drawerStyle={{
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <Drawer.Screen name='Home' component={HomeStack} />
          <Drawer.Screen name='Backyard Articles' component={HomeStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
