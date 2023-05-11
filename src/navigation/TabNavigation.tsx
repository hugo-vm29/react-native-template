import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/app/Home';
import Profile from '../screens/app/Profile';
import ScanList from '../screens/app/ScanList';
import Scanner from '../screens/app/Scanner';


export type RootTabProps = {
  Home: undefined;
  Profile: undefined;
  ScanList: undefined;
  Scanner: undefined;
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
      <RootTabNavigator.Screen
        name="ScanList"
        component={ScanList}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="list" color={color} size={size} />
          ),
        }}
      />
      <RootTabNavigator.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="camera" color={color} size={size} />
          ),
        }}
      />
    </RootTabNavigator.Navigator>
  );
};

export default Tabs;
