import React,{useEffect,useState} from 'react';
import {View,Text,TouchableOpacity,SafeAreaView,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement} from '../../store/slice/counterSlice'

const index=()=>{
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    const didTapOnDecrement=()=>{
       dispatch(decrement())
        
    }

    const didTapOnIncrement=()=>{
       dispatch(increment())
        
    }

    return(
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>didTapOnDecrement()}>
                    <Text style={[styles.buttonText,{marginRight:10}]}>-</Text>
                </TouchableOpacity>
                <Text style={styles.buttonText}>{count}</Text>
                <TouchableOpacity onPress={()=>didTapOnIncrement()}>
                    <Text style={[styles.buttonText,{marginLeft:10}]}>+</Text>
                </TouchableOpacity>
            </View> 
        </SafeAreaView>
    )
}

export default index;

const styles=StyleSheet.create({
    safeContainer:{
        flex:1,
        backgroundColor:'white',
        // marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:22,
        fontWeight:'bold',
    }
})