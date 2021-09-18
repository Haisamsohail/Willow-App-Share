import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNavigator from './src/Navigation/StackNavigator'
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
         <StackNavigator /> 
    </NavigationContainer>
  )
}

export default App;