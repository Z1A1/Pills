import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaViewBase
} from 'react-native';
import Login from './screens/login';
import Index from './screens/index';

import { NavigationContainer } from "@react-navigation/native";






const App =() =>{

  

 
  return (
    <NavigationContainer>


 <Index/>

    </NavigationContainer>
  );
}
export default App;