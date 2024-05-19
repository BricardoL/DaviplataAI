import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePageactionopenurl = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePageactionopenurl}>
      <View style={styles.homePageactionopenurlChild} />
      <View style={styles.homePageactionopenurlItem} />
      <Text style={[styles.holaGustavo, styles.textFlexBox]}>
        ¡Hola, Gustavo!
      </Text>
      <Text style={[styles.text, styles.textFlexBox]}>...</Text>
      <Image
        style={styles.image3Icon}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.postCamarasal61, styles.postPosition]}
        resizeMode="cover"
        source={require("../assets/post-camarasal6-1.png")}
      />
      <Image
        style={[styles.postCamarasal71, styles.postPosition]}
        resizeMode="cover"
        source={require("../assets/post-camarasal7-1.png")}
      />
      <View style={[styles.postCamarasal91Parent, styles.postLayout1]}>
        <Image
          style={[styles.postCamarasal91, styles.postLayout1]}
          resizeMode="cover"
          source={require("../assets/post-camarasal9-1.png")}
        />
        <Image
          style={styles.postCamarasal101}
          resizeMode="cover"
          source={require("../assets/post-camarasal10-1.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>$350</Text>
        <Text style={styles.cuentaDeAhorro}>Cuenta de Ahorro</Text>
        <Text style={styles.dui123456789}>DUI 12345678-9</Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Split1")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.dividir}>Dividir</Text>
        <Image
          style={styles.postCamarasal111}
          resizeMode="cover"
          source={require("../assets/post-camarasal11-1.png")}
        />
      </Pressable>
      <Text style={[styles.davipromociones, styles.presupuestoLayout]}>
        DAVIPromociones
      </Text>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone13141")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.presupuesto, styles.presupuestoLayout]}>
          Presupuesto
        </Text>
        <Image
          style={styles.postCamarasal113}
          resizeMode="cover"
          source={require("../assets/post-camarasal11-3.png")}
        />
      </Pressable>
      <View style={styles.tabs}>
        <View style={[styles.tabBarItem, styles.tabItemPosition]}>
          <Text style={styles.inicio}>Inicio</Text>
          <Image
            style={[styles.iconhome, styles.iconhomeLayout]}
            resizeMode="cover"
            source={require("../assets/iconhome.png")}
          />
        </View>
        <View style={[styles.tabBarItem1, styles.tabItemPosition]} />
        <Text style={[styles.transaccin, styles.transaccinTypo]}>
          Transacción
        </Text>
        <Text style={[styles.transaccin1, styles.transaccinTypo]}>
          Transacción
        </Text>
        <Image
          style={[styles.postCamarasal141, styles.postLayout]}
          resizeMode="cover"
          source={require("../assets/post-camarasal14-1.png")}
        />
        <Image
          style={[styles.postCamarasal142, styles.postLayout]}
          resizeMode="cover"
          source={require("../assets/post-camarasal14-1.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <View style={styles.rightSide}>
        <Image
          style={[styles.batteryIcon, styles.iconhomeLayout]}
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
        style={[styles.leftSideIcon, styles.leftSideIconLayout]}
        resizeMode="cover"
        source={require("../assets/left-side.png")}
      />
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("IPhone13142")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={styles.dividir}>Metas</Text>
        <Image
          style={[styles.postCamarasal121, styles.leftSideIconLayout]}
          resizeMode="cover"
          source={require("../assets/post-camarasal12-1.png")}
        />
      </Pressable>
      <Image
        style={styles.postCamarasal131}
        resizeMode="cover"
        source={require("../assets/post-camarasal13-1.png")}
      />
      <View style={[styles.pill, styles.pillLayout]} />
      <View style={[styles.pill1, styles.pillLayout]} />
      <View style={[styles.pill2, styles.pillLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  postPosition: {
    top: 58,
    position: "absolute",
  },
  postLayout1: {
    height: 189,
    width: 328,
    position: "absolute",
  },
  rectangleLayout: {
    height: 102,
    width: 129,
    top: 422,
    position: "absolute",
  },
  groupLayout: {
    height: 94,
    position: "absolute",
  },
  presupuestoLayout: {
    height: 23,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  tabItemPosition: {
    width: 76,
    left: "50%",
    height: 49,
    top: 0,
    position: "absolute",
  },
  iconhomeLayout: {
    width: 24,
    position: "absolute",
  },
  transaccinTypo: {
    color: Color.colorGray_500,
    bottom: 2,
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
    letterSpacing: 0,
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  postLayout: {
    width: 28,
    top: 2,
    height: 33,
    position: "absolute",
  },
  homePosition: {
    height: 5,
    width: 134,
    marginLeft: -67,
    left: "50%",
    position: "absolute",
  },
  leftSideIconLayout: {
    width: 54,
    position: "absolute",
  },
  pillLayout: {
    alignItems: "center",
    justifyContent: "center",
    height: 7,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_xl,
    top: 705,
    width: 15,
    position: "absolute",
  },
  homePageactionopenurlChild: {
    top: -14,
    left: -11,
    backgroundColor: Color.colorRed_100,
    width: 421,
    height: 242,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  homePageactionopenurlItem: {
    top: 170,
    left: 4,
    borderRadius: Border.br_13xl,
    width: 391,
    height: 778,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  holaGustavo: {
    top: 115,
    width: 152,
    height: 16,
    color: Color.colorWhite,
    fontSize: FontSize.bodyText_size,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 30,
  },
  text: {
    top: 354,
    left: 177,
    fontSize: 48,
    color: "rgba(0, 0, 0, 0.57)",
    width: 38,
    height: 71,
    fontFamily: FontFamily.montserratRegular,
  },
  image3Icon: {
    top: 35,
    left: 145,
    width: 100,
    height: 45,
    position: "absolute",
  },
  postCamarasal61: {
    width: 22,
    height: 19,
    left: 30,
  },
  postCamarasal71: {
    left: 339,
    width: 21,
    height: 25,
  },
  postCamarasal91: {
    left: 0,
    top: 0,
  },
  postCamarasal101: {
    left: 283,
    width: 29,
    height: 26,
    top: 7,
    position: "absolute",
  },
  text1: {
    top: 143,
    left: 28,
    fontFamily: FontFamily.archivoBlackRegular,
    width: 55,
    height: 20,
    color: Color.colorWhite,
    fontSize: FontSize.bodyText_size,
    textAlign: "left",
  },
  cuentaDeAhorro: {
    top: 15,
    left: 169,
    fontFamily: FontFamily.sawarabiGothicRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  dui123456789: {
    top: 148,
    left: 232,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.sawarabiGothicRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  postCamarasal91Parent: {
    top: 189,
    left: 30,
  },
  groupChild: {
    left: 18,
    width: 94,
    backgroundColor: Color.colorLavenderblush,
    borderRadius: Border.br_3xs,
    height: 94,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  dividir: {
    top: 69,
    height: 33,
    textAlign: "center",
    color: Color.colorBlack,
    width: 129,
    fontSize: FontSize.size_smi,
    left: 0,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  postCamarasal111: {
    left: 39,
    width: 52,
    height: 57,
    top: 7,
    position: "absolute",
  },
  rectangleParent: {
    left: 130,
  },
  davipromociones: {
    top: 546,
    left: 46,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    width: 142,
  },
  groupShadowBox: {
    width: 96,
    left: 17,
    height: 94,
    backgroundColor: Color.colorLavenderblush,
    borderRadius: Border.br_3xs,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  presupuesto: {
    top: 68,
    fontSize: FontSize.size_xs,
    width: 129,
    left: 0,
    fontFamily: FontFamily.montserratRegular,
  },
  postCamarasal113: {
    top: 1,
    left: 33,
    width: 62,
    height: 68,
    position: "absolute",
  },
  rectangleGroup: {
    left: 19,
    width: 129,
    height: 94,
    top: 422,
  },
  inicio: {
    marginLeft: -11,
    width: 26,
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
    letterSpacing: 0,
    bottom: 0,
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  iconhome: {
    left: 26,
    height: 24,
    top: 7,
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: -180.5,
  },
  tabBarItem1: {
    marginLeft: -84.5,
    opacity: 0.5,
  },
  transaccin: {
    marginLeft: -27.5,
  },
  transaccin1: {
    marginLeft: 110.5,
  },
  postCamarasal141: {
    left: 174,
  },
  postCamarasal142: {
    left: 312,
  },
  tabs: {
    top: 756,
    right: 9,
    left: 6,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    bottom: 0,
    height: 5,
    width: 134,
    marginLeft: -67,
  },
  homeIndicator: {
    bottom: 13,
  },
  batteryIcon: {
    right: 0,
    height: 11,
    top: 0,
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
    height: 21,
  },
  postCamarasal121: {
    top: 16,
    left: 38,
    height: 53,
  },
  rectangleContainer: {
    left: 242,
  },
  postCamarasal131: {
    top: 576,
    left: 47,
    borderRadius: 11,
    width: 287,
    height: 159,
    position: "absolute",
  },
  pill: {
    left: 248,
  },
  pill1: {
    left: 265,
  },
  pill2: {
    left: 282,
  },
  homePageactionopenurl: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default HomePageactionopenurl;
