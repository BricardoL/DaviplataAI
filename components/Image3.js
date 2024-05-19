import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image3 = () => {
  return (
    <ImageBackground
      style={styles.image9Icon}
      resizeMode="cover"
      source={require("../assets/image9.png")}
    />
  );
};

const styles = StyleSheet.create({
  image9Icon: {
    borderRadius: 113,
    width: 101,
    height: 103,
  },
});

export default Image3;
