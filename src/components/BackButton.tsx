import React, { FunctionComponent } from 'react';
import {
 TouchableOpacity,
 Pressable, 
 StyleSheet,
 Text,
 Image
} from "react-native";

const styles = StyleSheet.create({
  main:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  arrowIcon:{
    marginRight: 10,
    height: 18,
    width: 18
  },
  label:{
    color: "#4F63AC",
    fontWeight: '600',
    fontSize: 26
  }
});


const BackButton: FunctionComponent<BackButtonTypes> = ({ label , handleClick}) => {

  return (
    <Pressable hitSlop={20}  onPress={handleClick} style={styles.main}>
      <Image resizeMode='contain' style={styles.arrowIcon} source={require('../assets/backArrow.png')} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );

}


type BackButtonTypes = {
  label: string,
  handleClick?:  (e: Event) => void;
}

BackButton.defaultProps = {
  handleClick: () => {}
}

export default BackButton;