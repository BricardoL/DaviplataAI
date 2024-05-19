import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Inicio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inicio}>
      <View style={styles.inicioChild} />
      <View style={styles.inicioItem} />
      <Text style={[styles.holaGustavo, styles.textFlexBox]}>
        ¡Hola, Gustavo!
      </Text>
      <Text style={[styles.text, styles.textFlexBox]}>...</Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.postCamarasal61, styles.postPosition]}
        contentFit="cover"
        source={require("../assets/post-camarasal6-1.png")}
      />
      <Image
        style={[styles.postCamarasal71, styles.postPosition]}
        contentFit="cover"
        source={require("../assets/post-camarasal7-1.png")}
      />
      <View style={[styles.postCamarasal91Parent, styles.postLayout1]}>
        <Image
          style={[styles.postCamarasal91, styles.postLayout1]}
          contentFit="cover"
          source={require("../assets/post-camarasal9-1.png")}
        />
        <Image
          style={styles.postCamarasal101}
          contentFit="cover"
          source={require("../assets/post-camarasal10-1.png")}
        />
        <Text style={[styles.text1, styles.textFlexBox]}>$320</Text>
        <Text style={[styles.cuentaDeAhorro, styles.dui123456789Typo]}>
          Cuenta de Ahorro
        </Text>
        <Text style={[styles.dui123456789, styles.dividirTypo]}>
          DUI 12345678-9
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("SplitBill")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.dividir, styles.dividirFlexBox]}>Dividir</Text>
        <Image
          style={styles.postCamarasal111}
          contentFit="cover"
          source={require("../assets/post-camarasal11-1.png")}
        />
      </Pressable>
      <Text style={[styles.davipromociones, styles.user31IconLayout]}>
        DAVIpromociones
      </Text>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Presupuesto")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.presupuesto, styles.pagosPosition]}>
          Presupuesto
        </Text>
        <Image
          style={[styles.postCamarasal113, styles.pago21IconLayout]}
          contentFit="cover"
          source={require("../assets/post-camarasal11-3.png")}
        />
      </Pressable>
      <View style={styles.tabs}>
        <View style={[styles.tabBarItem, styles.tabItemPosition]}>
          <Text style={styles.inicio1}>Inicio</Text>
          <Image
            style={[styles.iconhome, styles.iconhomeLayout]}
            contentFit="cover"
            source={require("../assets/iconhome.png")}
          />
        </View>
        <View style={[styles.tabBarItem1, styles.tabItemPosition]} />
        <Text style={[styles.transaccin, styles.perfilTypo]}>Transacción</Text>
        <Text style={[styles.perfil, styles.perfilTypo]}>Perfil</Text>
        <Image
          style={[styles.postCamarasal141, styles.postLayout]}
          contentFit="cover"
          source={require("../assets/post-camarasal14-1.png")}
        />
        <View style={[styles.postCamarasal142, styles.postLayout]} />
        <Image
          style={[styles.user31Icon, styles.user31IconLayout]}
          contentFit="cover"
          source={require("../assets/user3-1.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <View style={styles.rightSide}>
        <Image
          style={[styles.batteryIcon, styles.iconhomeLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <Image
          style={styles.recordingIndicatorIcon}
          contentFit="cover"
          source={require("../assets/recording-indicator.png")}
        />
      </View>
      <Image
        style={[styles.leftSideIcon, styles.leftSideIconPosition]}
        contentFit="cover"
        source={require("../assets/left-side.png")}
      />
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Metas")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.dividir, styles.dividirFlexBox]}>Metas</Text>
        <Image
          style={[styles.postCamarasal121, styles.leftSideIconPosition]}
          contentFit="cover"
          source={require("../assets/post-camarasal12-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("PagoMatrcula")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.pagos, styles.pagosPosition]}>Pagos</Text>
      </Pressable>
      <Pressable
        style={styles.postCamarasal131}
        onPress={() => navigation.navigate("Promociones")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/post-camarasal13-1.png")}
        />
      </Pressable>
      <View style={[styles.pill, styles.pillLayout]} />
      <View style={[styles.pill1, styles.pillLayout]} />
      <View style={[styles.pill2, styles.pillLayout]} />
      <Image
        style={[styles.pago21Icon, styles.pago21IconLayout]}
        contentFit="cover"
        source={require("../assets/pago2-1.png")}
      />
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
  dui123456789Typo: {
    fontFamily: FontFamily.sawarabiGothicRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  dividirTypo: {
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleLayout: {
    height: 82,
    width: 104,
    top: 425,
    position: "absolute",
  },
  groupLayout: {
    height: 76,
    position: "absolute",
  },
  dividirFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  user31IconLayout: {
    height: 23,
    position: "absolute",
  },
  pagosPosition: {
    top: 55,
    textAlign: "center",
    color: Color.colorBlack,
    width: 104,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    position: "absolute",
  },
  pago21IconLayout: {
    width: 50,
    position: "absolute",
  },
  tabItemPosition: {
    left: "50%",
    height: 49,
    width: 76,
    top: 0,
    position: "absolute",
  },
  iconhomeLayout: {
    width: 24,
    position: "absolute",
  },
  perfilTypo: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    bottom: 0,
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  postLayout: {
    height: 33,
    width: 28,
    top: 2,
    position: "absolute",
  },
  homePosition: {
    height: 5,
    width: 134,
    marginLeft: -67,
    left: "50%",
    position: "absolute",
  },
  leftSideIconPosition: {
    top: 13,
    position: "absolute",
  },
  pillLayout: {
    alignItems: "center",
    justifyContent: "center",
    height: 7,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xl,
    top: 705,
    width: 15,
    position: "absolute",
  },
  inicioChild: {
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
  inicioItem: {
    top: 170,
    borderRadius: Border.br_13xl,
    width: 391,
    height: 778,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  holaGustavo: {
    top: 115,
    width: 152,
    height: 16,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 30,
  },
  text: {
    top: 354,
    left: 177,
    fontSize: FontSize.size_29xl,
    color: Color.colorGray_600,
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
    top: 0,
    left: 0,
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
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  cuentaDeAhorro: {
    top: 15,
    left: 169,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  dui123456789: {
    top: 148,
    left: 232,
    fontFamily: FontFamily.sawarabiGothicRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  postCamarasal91Parent: {
    top: 189,
    left: 30,
  },
  groupChild: {
    left: 15,
    width: 76,
    backgroundColor: Color.colorLavenderblush,
    borderRadius: Border.br_3xs,
    height: 76,
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
    top: 56,
    height: 27,
    width: 104,
    fontSize: FontSize.size_3xs,
    position: "absolute",
    fontFamily: FontFamily.montserratRegular,
    left: 0,
  },
  postCamarasal111: {
    top: 6,
    width: 42,
    height: 46,
    left: 31,
    position: "absolute",
  },
  rectangleParent: {
    left: 98,
  },
  davipromociones: {
    top: 533,
    left: 44,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    width: 142,
    textAlign: "center",
    color: Color.colorBlack,
  },
  groupShadowBox: {
    width: 77,
    left: 14,
    height: 76,
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
    height: 19,
  },
  postCamarasal113: {
    top: 1,
    left: 27,
    height: 55,
  },
  rectangleGroup: {
    left: 9,
    width: 104,
    height: 76,
    top: 425,
  },
  inicio1: {
    marginLeft: -11,
    width: 26,
    fontFamily: FontFamily.interMedium,
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
  perfil: {
    marginLeft: 126.5,
  },
  postCamarasal141: {
    left: 174,
  },
  postCamarasal142: {
    left: 312,
  },
  user31Icon: {
    top: 8,
    left: 314,
    borderRadius: Border.br_7xs,
    width: 23,
    opacity: 0.65,
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
    left: 25,
    width: 54,
    height: 21,
  },
  postCamarasal121: {
    width: 43,
    height: 43,
    left: 31,
  },
  rectangleContainer: {
    left: 188,
  },
  pagos: {
    height: 27,
  },
  groupPressable: {
    left: 279,
  },
  icon: {
    borderRadius: Border.br_2xs,
    height: "100%",
    width: "100%",
  },
  postCamarasal131: {
    left: 45,
    top: 563,
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
  pago21Icon: {
    top: 429,
    left: 306,
    height: 51,
  },
  inicio: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Inicio;
