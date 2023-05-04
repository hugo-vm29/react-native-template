import React, { FunctionComponent } from 'react';
import {
 TouchableOpacity,
 Pressable, 
 StyleSheet,
 Text
} from "react-native";

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#4F63AC",
    padding: 20,
    width: '100%',
    height: 60
  },
  innerText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: '700',
    fontSize: 16
  }
});


const Button: FunctionComponent<ButtonPropsTypes> = ({ title , handleClick}) => {

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={handleClick}>
      <Text style={styles.innerText}>{title}</Text>
    </TouchableOpacity>
  );

}


type ButtonPropsTypes = {
  title: string,
  handleClick?:  (e: Event) => void;
}

Button.defaultProps = {
  handleClick: () => {}
}

export default Button;