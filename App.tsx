/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';

import  { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux';

import store from './src/store';
import RootNavigation from './src/navigation/RootNavigation';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation/>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
