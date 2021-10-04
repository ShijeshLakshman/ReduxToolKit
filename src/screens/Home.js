 import React,{useState,useEffect} from 'react';
 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
 const Home = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark';

   return (
     <SafeAreaView style={styles.safeContainer}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <View style={styles.container}>
              <TouchableOpacity style={styles.buttonCont} onPress={()=>{navigation.navigate("UsersList")}}>
                <Text>USER LIST</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCont} onPress={()=>{navigation.navigate("CountDown")}}>
                <Text>COUNT DOWN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCont} onPress={()=>{navigation.navigate("ToDo")}}>
                <Text>TODO</Text>
              </TouchableOpacity>
         </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
      safeContainer:{
        backgroundColor: "white",
        flex:1
      },
      container:{
        backgroundColor: "white",
        flex:1,
        paddingHorizontal:10,
        // alignItems:'center'
      },
      buttonCont:{
        height:30,
        marginHorizontal:40,
        borderWidth:1,
        borderRadius:15,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center'
      }
 });
 
 export default Home;
 