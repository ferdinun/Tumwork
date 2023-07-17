import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/src/home';
import Firstscreen from './assets/src/first';
import Signup from './assets/src/Signup';
import Login from './assets/src/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Firstscreen" component={Firstscreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown:true}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown:true}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;