import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,SafeAreaView,StyleSheet,TextInput,FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {addToDo,removeTodo} from '../../store/slice/toDoSlice';

const index=()=>{
    const dispatch = useDispatch();
    const list = useSelector((state) => state.toDo.todoList);
    const [todo, setToDo] = useState('');

    const didTapOnRemove=(item,index)=>{
        dispatch(removeTodo(index))
    }

    return(
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Text style={styles.headerText}>TODO LSIT</Text>
                <View>
                    <TextInput
                        value={todo}
                        placeholder={"Enter your todo"}
                        style={{borderWidth:1,marginTop:5}}
                        onChangeText={(text)=>{setToDo(text)}}
                    />
                    <TouchableOpacity 
                        onPress={()=>{dispatch(addToDo(todo))}}
                        style={styles.buttonCont}
                    >
                        <Text style={{color:'green'}}>Add ToDo</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={list}
                        style={{marginTop:10}}
                         renderItem={({item,index})=>
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
                                <Text>{item}</Text>
                                <TouchableOpacity onPress={()=>{didTapOnRemove(item,index)}}>
                                    <Text style={{color:'red'}}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default index;

const styles=StyleSheet.create({
        safeContainer:{
        flex:1,
        backgroundColor:'white',
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
    subContainer:{
        marginTop:20
    },
    buttonCont:{
        height:30,
        marginHorizontal:80,
        borderWidth:1,
        borderRadius:15,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center'
    }
})