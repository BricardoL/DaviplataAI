import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image7Icon}
      resizeMode="cover"
      source={require("../assets/image7.png")}
    />
  );
};

const styles = StyleSheet.create({
  image7Icon: {
    width: 49,
    height: 50,
  },
});

export default Image1;
