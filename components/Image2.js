import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image2 = () => {
  return (
    <ImageBackground
      style={styles.image8Icon}
      resizeMode="cover"
      source={require("../assets/image8.png")}
    />
  );
};

const styles = StyleSheet.create({
  image8Icon: {
    borderRadius: 56,
    width: 96,
    height: 106,
  },
});

export default Image2;
