import React from 'react';
import { Text , Image, View, Pressable, StyleSheet} from 'react-native';
import Button from '../../components/Button'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackProps } from '../../../App'
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container:{
    paddingRight: 24,
    paddingLeft: 24,
    alignItems: "center",
    justifyContent: "center",
    minHeight: '100%',
  },
  image: {
    width: '100%',
    height: 200
  },
  title:{
    //fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 40
  },
  innerTitle:{
    color: "#FCA34D",
    textDecorationLine: "underline"
  },
  textContainer: {
    marginBottom: 55,
    marginTop: 55,
    alignItems: "center"
  },
  signInText: {
    color: "#4F63AC",
    fontWeight: '700',
    fontSize: 16,
    marginTop: 30
  }
});


type SplashProps = NativeStackScreenProps<RootStackProps, 'Splash'>;

const Splash = ( { route, navigation }: SplashProps ) => {

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  }

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image resizeMode='contain' style={styles.image} source={require('../../assets/splash.png')} />
        <View style={styles.textContainer}>
          <Text  style={styles.title}>You’ll Find</Text>
          <Text  style={[styles.title, styles.innerTitle]}>All you need </Text>
          <Text  style={styles.title}>Here !</Text>
        </View>
        <Button title="Sign Up" handleClick={handleSignUp} />
          <Pressable hitSlop={20}  onPress={handleSignIn}>
            <Text style={styles.signInText}>Sign In</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  );

}

export default Splash;
