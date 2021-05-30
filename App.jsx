import React from 'react';
import Navigator from './components/Navigator';
import { Provider } from 'react-redux';

import store from './state/store/configureStore';
import axios from 'axios';

window.store = store;

axios.defaults.baseURL = 'https://fakest-newzz.herokuapp.com/api';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
