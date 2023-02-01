import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/router/StackNavigator';
import { AuthProvider } from './src/context/AuthConrtext';


const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
}

export default App;