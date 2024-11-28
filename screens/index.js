import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Login from './login';
import Home from './homeScreen';

const Stack = createStackNavigator();
const Index = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="home"
          component={Home}
          options={{title:"Profile"
            ,headerTitleAlign:'center'
          }}
        
        />

      </Stack.Navigator>
    );
  };
  export default Index;