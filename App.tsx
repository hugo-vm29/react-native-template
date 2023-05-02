import React from 'react';
import type {PropsWithChildren} from 'react';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import Home from './src/screens/app/Home';
import Profile from './src/screens/app/Profile';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export type RootStackProps = {
  Splash: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Tabs: undefined;
};

export type RootTabProps = {
  Home: undefined;
  Profile: undefined;
};


const screenDefaultOptions = {
  headerShown: false
}

const RootStackNavigator = createNativeStackNavigator<RootStackProps>();
const RootTabNavigator = createBottomTabNavigator<RootTabProps>();


const Tabs = () => {

  return(
    <RootTabNavigator.Navigator 
      screenOptions={{
        ...screenDefaultOptions,
        tabBarActiveTintColor: '#4F63AC',
        tabBarShowLabel: false,
        tabBarStyle : { borderTopColor: "grey" }

      }}  
    >
      <RootTabNavigator.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <RootTabNavigator.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </RootTabNavigator.Navigator>
  )
}

const App = () => {

  const isSignedIn = true;

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  }; 

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={customTheme}>
        <RootStackNavigator.Navigator screenOptions={screenDefaultOptions} >
          { isSignedIn ?
            <>
               <RootStackNavigator.Screen name="Tabs" component={Tabs} />
            </>
            :
            <>
              <RootStackNavigator.Screen name="Splash" component={Splash} />
              <RootStackNavigator.Screen name="SignUp" component={SignUp} />
              <RootStackNavigator.Screen name="SignIn" component={SignIn} />
            </>
          }
        </RootStackNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )

}

/*

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}*/

/*
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/

export default App;
