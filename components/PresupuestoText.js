import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PresupuestoText = () => {
  return <Text style={styles.presupuesto}>Presupuesto</Text>;
};

const styles = StyleSheet.create({
  presupuesto: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 128,
    height: 23,
  },
});

export default PresupuestoText;
