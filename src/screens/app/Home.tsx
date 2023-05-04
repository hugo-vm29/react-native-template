import React from 'react';
import { Text , View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container:{
    padding: 24
  }
});

const Home = () => {


  return (
    <SafeAreaView>
      <View style={styles.container}>
       <Text> HOME </Text>
      </View>
    </SafeAreaView>
  );

}

export default Home;
