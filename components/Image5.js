import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image5 = () => {
  return (
    <ImageBackground
      style={styles.image6Icon}
      resizeMode="cover"
      source={require("../assets/image-3.png")}
    />
  );
};

const styles = StyleSheet.create({
  image6Icon: {
    width: 100,
    height: 45,
  },
});

export default Image5;
