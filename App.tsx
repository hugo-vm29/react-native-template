import React from 'react';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Tabs from './src/navigation/TabNavigation';
import Scanner from './src/screens/app/Scanner';

export type RootStackProps = {
  Splash: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Tabs: undefined;
  // Scanner: undefined,
};

const RootStackNavigator = createNativeStackNavigator<RootStackProps>();

const App = () => {
  const isSignedIn = true;

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={customTheme}>
        <RootStackNavigator.Navigator screenOptions={{headerShown: false}}>
          {isSignedIn ? (
            <>
              <RootStackNavigator.Screen name="Tabs" component={Tabs} />
              {/* <RootStackNavigator.Screen name="Scanner" component={Scanner} /> */}
            </>
          ) : (
            <>
              <RootStackNavigator.Screen name="Splash" component={Splash} />
              <RootStackNavigator.Screen name="SignUp" component={SignUp} />
              <RootStackNavigator.Screen name="SignIn" component={SignIn} />
            </>
          )}
        </RootStackNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
