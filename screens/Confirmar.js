import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  StyleVariable,
} from "../GlobalStyles";

const Confirmar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.confirmar, styles.confirmarBg]}>
      <View style={[styles.iphone13145, styles.iphone13145Layout1]}>
        <View style={[styles.iphone13145Child, styles.buttonShadowBox]} />
        <Text style={[styles.dividirLaCuenta, styles.arturoFernndezTypo]}>
          Dividir la cuenta
        </Text>
        <View style={[styles.iphone13145Item, styles.iphone13145Layout]} />
        <View style={[styles.iphone13145Inner, styles.iphone13145Layout]} />
        <Text style={[styles.monto, styles.montoLayout]}>Monto</Text>
        <Text style={styles.text}>$30.00</Text>
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <View style={[styles.rightSide, styles.montoLayout]}>
          <Image
            style={[styles.batteryIcon, styles.iphone13145Position]}
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
        <Pressable
          style={[styles.rectangleParent, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Confirmar")}
        >
          <View style={styles.groupShadowBox} />
          <Text style={[styles.siguiente, styles.totalTypo]}>SIGUIENTE</Text>
        </Pressable>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <Pressable
            style={[styles.rectangleGroup, styles.groupParentLayout]}
            onPress={() => navigation.navigate("Confirmar")}
          >
            <View style={styles.groupShadowBox} />
            <Text style={[styles.total, styles.totalTypo]}>TOTAL</Text>
          </Pressable>
          <Text style={styles.text1}>$30.00</Text>
        </View>
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
      <View style={[styles.confirmarChild, styles.confirmarLayout]} />
      <Text style={[styles.adrianaSalazar, styles.tTypo]}>Adriana Salazar</Text>
      <Text style={[styles.text2, styles.textTypo1]}>8323-8323</Text>
      <Text style={[styles.text3, styles.textTypo1]}>7547-7557</Text>
      <Text style={[styles.text4, styles.textTypo]}>$10.00</Text>
      <Text style={[styles.text5, styles.textTypo]}>$10.00</Text>
      <Image
        style={[styles.user36Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user3-2.png")}
      />
      <Text style={[styles.t, styles.tTypo]}>Tú</Text>
      <Text style={[styles.text6, styles.textTypo1]}>4123-43124</Text>
      <Text style={[styles.text7, styles.textTypo]}>$10.00</Text>
      <Image
        style={[styles.user37Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user3-2.png")}
      />
      <Image
        style={[styles.confirmarItem, styles.confirmarLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Text style={[styles.arturoFernndez, styles.arturoFernndezTypo]}>
        Arturo Fernández
      </Text>
      <Image
        style={[styles.user32Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user3-2.png")}
      />
      <View style={[styles.pricingCard, styles.buttonShadowBox]}>
        <View style={styles.header}>
          <Text style={[styles.gustavo, styles.gustavoTypo]}>Gustavo</Text>
          <View style={styles.price}>
            <Text style={styles.text8}>$30</Text>
            <Text style={[styles.serTuMonto, styles.gustavoTypo]}>
              Será tu monto total a pagar.
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonShadowBox]}
          onPress={() => navigation.navigate("Hola")}
        >
          <Text style={[styles.confirmar1, styles.gustavoTypo]}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmarBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  iphone13145Layout1: {
    width: 390,
    left: 0,
  },
  buttonShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  arturoFernndezTypo: {
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iphone13145Layout: {
    borderRadius: Border.br_13xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  montoLayout: {
    width: 67,
    position: "absolute",
  },
  iphone13145Position: {
    top: 0,
    position: "absolute",
  },
  homePosition: {
    height: 5,
    width: 134,
    left: "50%",
    marginLeft: -67,
    position: "absolute",
  },
  groupParentLayout: {
    width: 168,
    height: 38,
    position: "absolute",
  },
  totalTypo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: 4.5,
    top: 10,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  confirmarLayout: {
    width: 342,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  tTypo: {
    width: 144,
    left: 72,
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo1: {
    width: 77,
    fontSize: FontSize.size_sm,
    left: 98,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    height: 23,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    width: 46,
    left: 305,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 29,
    width: 29,
    borderRadius: Border.br_7xs,
    left: 36,
    position: "absolute",
  },
  gustavoTypo: {
    fontFamily: FontFamily.bodyText,
    lineHeight: 24,
    fontSize: FontSize.presetsBody2_size,
    fontWeight: "500",
    textAlign: "left",
  },
  iphone13145Child: {
    top: -14,
    left: -11,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorRed_100,
    width: 421,
    height: 867,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  dividirLaCuenta: {
    top: 95,
    left: 136,
    width: 128,
    color: Color.colorWhite,
  },
  iphone13145Item: {
    top: 198,
    height: 677,
    width: 390,
    left: 0,
  },
  iphone13145Inner: {
    top: 133,
    left: 108,
    width: 184,
    height: 96,
  },
  monto: {
    top: 144,
    left: 166,
    fontSize: FontSize.bodyText_size,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    width: 67,
    height: 23,
    textAlign: "left",
  },
  text: {
    top: 167,
    left: 132,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    width: 135,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    height: 23,
    position: "absolute",
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
    height: 11,
  },
  leftSideIcon: {
    top: 13,
    width: 54,
    height: 21,
    left: 25,
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
  groupShadowBox: {
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    height: 38,
    width: 168,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  siguiente: {
    left: 26,
  },
  rectangleParent: {
    top: 758,
    left: 111,
    height: 38,
  },
  total: {
    left: 15,
  },
  rectangleGroup: {
    height: 38,
    left: 0,
    width: 168,
    top: 0,
  },
  text1: {
    left: 103,
    width: 58,
    fontSize: FontSize.presetsBody2_size,
    top: 10,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    top: 457,
    left: 200,
    height: 38,
  },
  iphone13145: {
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    height: 844,
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
  confirmarChild: {
    top: 244,
    backgroundColor: Color.colorGray_100,
    height: 201,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    width: 342,
    left: 25,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  adrianaSalazar: {
    top: 324,
  },
  text2: {
    top: 341,
  },
  text3: {
    top: 392,
  },
  text4: {
    top: 328,
  },
  text5: {
    top: 378,
  },
  user36Icon: {
    top: 322,
  },
  t: {
    top: 268,
  },
  text6: {
    top: 285,
  },
  text7: {
    top: 272,
  },
  user37Icon: {
    top: 266,
  },
  confirmarItem: {
    top: 303,
    left: 29,
    height: 38,
  },
  arturoFernndez: {
    top: 376,
    left: 78,
    width: 153,
    color: Color.colorBlack,
  },
  user32Icon: {
    top: 375,
  },
  gustavo: {
    opacity: 0.8,
    color: Color.colorBlack,
  },
  text8: {
    fontSize: FontSize.heading_size,
    lineHeight: 44,
    fontFamily: FontFamily.heading,
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "left",
  },
  serTuMonto: {
    marginLeft: 8,
    color: Color.colorBlack,
  },
  price: {
    alignItems: "flex-end",
    marginTop: 12,
    flexDirection: "row",
  },
  header: {
    justifyContent: "flex-end",
  },
  confirmar1: {
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
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
  },
  pricingCard: {
    top: 315,
    left: -14,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 15,
    elevation: 15,
    borderRadius: Border.br_xs,
    width: 404,
    padding: StyleVariable.spacingM,
    justifyContent: "flex-end",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  confirmar: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default Confirmar;
