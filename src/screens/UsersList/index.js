import React,{useState,useEffect} from 'react';
import {View,Text,SafeAreaView,StyleSheet,FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/slice/toDoSlice';

const index=()=>{
    const dispatch = useDispatch();
    const [users,setUsers]=useState([]);

     useEffect(async()=>{
        const usersList = await dispatch(getUsers());
        console.log("USERSLIST",usersList);
        if (getUsers.fulfilled.match(usersList)) {
            setUsers(usersList.payload)
        } else {
        }
   },[])


    return(
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Text style={styles.headerText}>USER DETAILS</Text>
                <FlatList
                    data={users}
                    renderItem={({item,index})=>
                        <View style={{padding:5,borderWidth:1,marginTop:5}}>
                            <Text>{item.name}</Text>
                            <Text>{item.email}</Text>
                            <Text>{item.gender}</Text>
                            <Text>{item.status}</Text>
                        </View>
                    }
               />
            </View>
        </SafeAreaView>
    )
}

export default index;

const styles = StyleSheet.create({
    safeContainer:{
        flex:1,
        backgroundColor:'white',
        marginBottom:10
    },
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:'white'
    },
    headerText:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
    },
})