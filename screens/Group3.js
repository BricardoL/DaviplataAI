import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Group3 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.tusPromocionesComo}>{`Tus promociones como estudiante
`}</Text>
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
    width: 264,
    position: "absolute",
    height: 37,
  },
  tusPromocionesComo: {
    top: 13,
    left: 10,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 236,
    height: 11,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 37,
  },
});

export default Group3;
