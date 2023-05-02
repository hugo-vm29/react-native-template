import React from 'react';
import { Text , Image, View, Pressable, StyleSheet} from 'react-native';
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackProps } from '../../../App'
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container:{
    padding: 24
  }
});


type SignInProps = NativeStackScreenProps<RootStackProps, 'SignIn'>;

const SignIn = ( { route, navigation }: SignInProps ) => {


  const onClickBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton label='Sign In' handleClick={onClickBack} />
      </View>
    </SafeAreaView>
  );

}

export default SignIn;
