import React, {FunctionComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../shared/Button';

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
});

const SignUpForm: FunctionComponent<SignUpFormProps> = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <Text> FORM CONTAINER </Text>
      <Button title="Sign Up" handleClick={onSubmit} />
    </View>
  );
};

type SignUpFormProps = {
  onSubmit: () => void;
};

SignUpForm.defaultProps = {
  onSubmit: () => {},
};

export default SignUpForm;
