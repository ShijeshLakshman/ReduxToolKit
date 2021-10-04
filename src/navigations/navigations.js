import React, {useEffect, useRef, useState} from 'react';
import {StatusBar, AppState} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import CountDown from '../screens/CountDown/index.js';
import ToDo from '../screens/ToDo';
import UsersList from '../screens/UsersList';

const index = () => {
  const Stack = createStackNavigator();

  return (
    <React.Fragment>
      <>
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}rr
          initialRouteName={'Home'}>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'CountDown'} component={CountDown} />
          <Stack.Screen name={'ToDo'} component={ToDo} />
          <Stack.Screen name={'UsersList'} component={UsersList} />

        </Stack.Navigator>

      </>
    </React.Fragment>
  );
};

export default index;
