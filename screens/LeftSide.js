import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border } from "../GlobalStyles";

const LeftSide = () => {
  return (
    <View style={styles.leftSide}>
      <Image
        style={styles.timeIcon}
        resizeMode="cover"
        source={require("../assets/time.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timeIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_13xl,
    width: 54,
    height: 21,
  },
  leftSide: {
    flex: 1,
    width: "100%",
    height: 21,
  },
});

export default LeftSide;
