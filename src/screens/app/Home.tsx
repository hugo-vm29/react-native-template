import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/shared/Button';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

const Home = () => {
  
  
  const handleClick = () => {

    return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => {
      console.log(json.movies);
    })
    .catch(error => {
      console.error(error);
    });
  }

  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text> HOME </Text>

        <Button title="Api call" handleClick={handleClick} />

      </View>
    </SafeAreaView>
  );
};

export default Home;
