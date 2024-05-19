import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
  StyleVariable,
} from "../GlobalStyles";

const Hola = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.hola, styles.holaLayout]}>
      <View style={[styles.iphone13145, styles.iphone13145Position]}>
        <View style={[styles.iphone13145Child, styles.buttonShadowBox]} />
        <Text style={styles.dividirLaCuenta}>Dividir la cuenta</Text>
        <View style={[styles.iphone13145Item, styles.iphone13145Position]} />
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={styles.recordingIndicatorIcon}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          resizeMode="cover"
          source={require("../assets/left-side2.png")}
        />
        <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View>
      </View>
      <View style={[styles.pricingCard, styles.buttonShadowBox]}>
        <View style={styles.header}>
          <Text style={[styles.gustavo, styles.gustavoTypo]}>Gustavo</Text>
          <View style={styles.price}>
            <Text style={[styles.tuDineroEst, styles.gustavoTypo]}>
              Tu dinero está en el lugar correcto
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonShadowBox]}
          onPress={() => navigation.navigate("HomePageactionopenurl")}
        >
          <Text style={[styles.inicio, styles.inicioTypo]}>Inicio</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.postCamarasal151}
        onPress={() => navigation.navigate("Split1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/post-camarasal15-1.png")}
        />
      </Pressable>
      <Image
        style={styles.holaChild}
        resizeMode="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  holaLayout: {
    height: 844,
    overflow: "hidden",
  },
  iphone13145Position: {
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  buttonShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  homePosition: {
    height: 5,
    width: 134,
    left: "50%",
    marginLeft: -67,
    position: "absolute",
  },
  gustavoTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.presetsBody2_size,
    textAlign: "left",
  },
  inicioTypo: {
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
    lineHeight: 24,
  },
  iphone13145Child: {
    top: -14,
    left: -11,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.colorRed_100,
    width: 421,
    height: 867,
    position: "absolute",
  },
  dividirLaCuenta: {
    top: 95,
    left: 136,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratRegular,
    width: 128,
    height: 23,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone13145Item: {
    top: 201,
    borderRadius: Border.br_13xl,
    height: 677,
  },
  image3Icon: {
    top: 35,
    left: 145,
    width: 100,
    height: 45,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 18,
    right: 26,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 13,
    left: 25,
    width: 54,
    height: 21,
    position: "absolute",
  },
  homeIndicator1: {
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    bottom: 13,
  },
  iphone13145: {
    top: 0,
    overflow: "hidden",
    height: 844,
  },
  gustavo: {
    opacity: 0.8,
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
    lineHeight: 24,
  },
  tuDineroEst: {
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.heading,
  },
  price: {
    alignItems: "flex-end",
    marginTop: 12,
    flexDirection: "row",
  },
  header: {
    justifyContent: "flex-end",
  },
  inicio: {
    fontSize: FontSize.presetsBody2_size,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "left",
    color: Color.colorWhite,
  },
  button: {
    alignSelf: "stretch",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 2,
    elevation: 2,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    marginTop: 32,
    flexDirection: "row",
    backgroundColor: Color.colorBlack,
  },
  pricingCard: {
    top: 410,
    left: -2,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 15,
    elevation: 15,
    borderRadius: Border.br_xs,
    width: 392,
    padding: StyleVariable.spacingM,
    justifyContent: "flex-end",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  postCamarasal151: {
    left: 40,
    top: 92,
    width: 14,
    height: 22,
    position: "absolute",
  },
  holaChild: {
    top: 303,
    left: 29,
    borderRadius: Border.br_4xs,
    width: 342,
    height: 38,
    position: "absolute",
  },
  image4Icon: {
    top: 245,
    left: 115,
    borderRadius: 101,
    width: 159,
    height: 155,
    position: "absolute",
  },
  hola: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Hola;
