import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Group2 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.aprovechaTuDescuento}>
        Aprovecha tu descuento como estudiante en Tony Roma’s este 30 de mayo
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    top: 0,
    left: 0,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorGray_100,
    width: 192,
    position: "absolute",
    height: 118,
  },
  aprovechaTuDescuento: {
    top: 22,
    left: 23,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 146,
    height: 35,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 118,
  },
});

export default Group2;
