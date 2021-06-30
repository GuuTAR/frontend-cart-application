import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootRouter from './src/route/RootRouter';

const App = () => {
  return (
    <NavigationContainer>
      <RootRouter />
    </NavigationContainer>
  );
};

export default App;
