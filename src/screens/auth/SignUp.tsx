import React from 'react';
import {View, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackProps} from '../../../App';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthHeader from '../../components/auth/AuthHeader';
import SignUpForm from '../../components/auth/SignUpForm';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

type SignUpProps = NativeStackScreenProps<RootStackProps, 'SignUp'>;

const SignUp = ({navigation}: SignUpProps) => {
  const onClickBack = () => {
    navigation.goBack();
  };

  const onClickSignUp = () => {};

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader label="Sign Up" handleClick={onClickBack} />
        <SignUpForm onSubmit={onClickSignUp} />
        {/* <SocialSignUp />
        <SignUpFooter /> */}
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
