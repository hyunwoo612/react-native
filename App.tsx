import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StackNavigation from './src/navigations/Stack';
import { registerRootComponent } from 'expo';

const App = () => {

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

    return (
        <NavigationContainer theme={navTheme}>
            <StackNavigation />
        </NavigationContainer>
    );
};

export default App;

registerRootComponent(App);
