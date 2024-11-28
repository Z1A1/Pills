import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Home = ({route,navigation}) => {
    const {photo,name,
        email}=route.params.userdetails
    console.log("the route params",photo)
async function logOut () {
    try {
        await GoogleSignin.signOut();
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('idToken')
        navigation.goBack()
      } catch (error) {
        console.error(error);
      }
}
  return (
    <View style={{flex:1}}>
 <View style={styles.header}>
<View style={styles.profileimage}>
<Image           source={{
          uri: photo
        }} style={styles.profileimage} 
       />
       
</View>
 </View>
 <View style={styles.footer}>
<Text style={{  fontSize: 20,
    fontWeight: 'bold',alignSelf:'baseline',padding:10}}>
    Name 
    </Text>
    <Text style={{  fontSize: 14,
    fontWeight: 'medium',alignSelf:'baseline',padding:10}}>

{name}
    </Text>
<Text style={{  fontSize: 20,
    fontWeight: 'bold',alignSelf:'baseline',padding:10}}>
    email 
</Text>
<Text style={{  fontSize: 14,
    fontWeight: 'medium',alignSelf:'baseline',padding:10}}>

{email}
    </Text>
<TouchableOpacity style={styles.logoutButton} onPress={logOut}>

<Text style={styles.logout}>
Logout
</Text>
</TouchableOpacity>
 </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
header:{
    flex:1,
    justifyContent:'center'
   
},
footer:{
    flex:2,
alignItems:'center',
justifyContent:'center',

margin:30
},
profileimage:{
height:'174',
width:'179'
,  borderColor:'black', // Background color of the ellipse
borderRadius: 100,
 borderWidth: 3,
alignSelf:'center',

justifyContent:'center',
margin:20

},
logout:{
    color:'white',
    
    fontSize:20,
     fontWeight: 'bold'
}
,  logoutButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    margin:50
  }
})