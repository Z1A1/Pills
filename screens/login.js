import { StyleSheet, Text, View ,Image,Dimensions,TouchableOpacity, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';



const {width, height} = Dimensions.get('window');
console.log(width, height);
const Login = ({navigation}) => {

  async function onGoogleButtonPress() {
   
    // Check if your device supports Google Play
   
   try {
    GoogleSignin.configure({
      webClientId: '1011518141840-99rm6aj9dgtgb8ft417el6b890e6e199.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
    console.log("the signinresult",signInResult)
    if (signInResult.type=="success") {
      await AsyncStorage.setItem('user', JSON.stringify(signInResult?.data?.user));
      await AsyncStorage.setItem('idToken', signInResult?.data?.idToken)
      navigation.navigate('home',{userdetails:signInResult?.data?.user})
      
    }
    if (signInResult.type=="cancelled") {

Alert.alert('Login Cancelled')
    }

  
    // Try the new style of google-sign in result, from v13+ of that module
    idToken = signInResult.data?.idToken;
  
    if (!idToken) {
      // if you are using older versions of google-signin, try old style result
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.token);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
   } catch (error) {
    console.error(error)
     if (error === 'NETWORK_ERROR') {
      Alert.alert('Network Error', 'Please check your internet connection.');
    } else {
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
   }
 
  }
  return (
    <View style={{flex:1}}>
        <View style={styles.header}>

        <Image
        source={require('../assests/Login.png')}
        style={{
          width: 73,
          height: 34,
        top:120,
        left:159
        }}
        resizeMode="contain"/>
           <Image
        source={require('../assests/signup.png')}
        style={{
          width: 390,
          height: 194,
        top:197,
    
        }}
        resizeMode="contain"/>
          <Image
        source={require('../assests/Button.png')}
        style={{
          width: 358,
          height: 44,
   left:10,top:250
    
        }}
        resizeMode="contain"/>  
        </View>
        <View style={styles.footer}>
      
        </View>
    
         <TouchableOpacity 
             onPress={ onGoogleButtonPress}
         >

        <Image
        source={require('../assests/google.png')}
        style={{
          width: 358,
          height: 54,

    bottom:20
        }}
        resizeMode="contain"/>  
        </TouchableOpacity>
    
 
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    header:{
        flex:1
    },
    footer:{
        flex:.5,
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'flex-end'
    }
})