import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/app/Home';
import Profile from '../screens/app/Profile';

export type RootTabProps = {
  Home: undefined;
  Profile: undefined;
};

/* eslint-disable react/no-unstable-nested-components */
const RootTabNavigator = createBottomTabNavigator<RootTabProps>();

const Tabs = () => {
  return (
    <RootTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4F63AC',
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: 'grey'},
      }}>
      <RootTabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <RootTabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </RootTabNavigator.Navigator>
  );
};

export default Tabs;
