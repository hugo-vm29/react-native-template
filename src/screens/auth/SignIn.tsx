import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthHeader from '../../components/auth/AuthHeader';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackProps} from '../../../App';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

type SignInProps = NativeStackScreenProps<RootStackProps, 'SignIn'>;

const SignIn = ({navigation}: SignInProps) => {
  const onClickBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader label="Sign In" handleClick={onClickBack} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
