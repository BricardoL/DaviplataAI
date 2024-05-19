import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image4 = () => {
  return (
    <ImageBackground
      style={styles.image10Icon}
      resizeMode="cover"
      source={require("../assets/image10.png")}
    />
  );
};

const styles = StyleSheet.create({
  image10Icon: {
    width: 539,
    height: 557,
  },
});

export default Image4;
