import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle1 = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
    width: 421,
    height: 711,
  },
});

export default Rectangle1;
