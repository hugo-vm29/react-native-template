import React, {FunctionComponent} from 'react';
import {Pressable, StyleSheet, Text, Image} from 'react-native';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    marginRight: 10,
    height: 18,
    width: 18,
  },
  label: {
    color: '#4F63AC',
    fontWeight: '600',
    fontSize: 26,
  },
});

const AuthHeader: FunctionComponent<AuthHeaderTypes> = ({
  label,
  handleClick,
}) => {
  return (
    <Pressable hitSlop={20} onPress={handleClick} style={styles.main}>
      <Image
        resizeMode="contain"
        style={styles.arrowIcon}
        source={require('../../assets/backArrow.png')}
      />
      <Text style={styles.label}>{label} </Text>
    </Pressable>
  );
};

type AuthHeaderTypes = {
  label: string;
  handleClick?: (e: Event) => void;
};

AuthHeader.defaultProps = {
  handleClick: () => {},
};

export default AuthHeader;
