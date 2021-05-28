import React from 'react';
import Navigator from './components/Navigator'
import { Provider } from 'react-redux';
import store from './state/store/configureStore';

window.store = store

const App = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
};

export default App;

