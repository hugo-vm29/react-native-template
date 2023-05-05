import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text> PROFILE </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
