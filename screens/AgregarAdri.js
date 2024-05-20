import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AgregarAdri = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.agregarAdri, styles.labelFlexBox]}>
      <View style={[styles.agregarAdriChild, styles.agregarShadowBox]} />
      <Text style={styles.dividirLaCuenta}>Dividir la cuenta</Text>
      <Text style={[styles.dividirLaCuenta1, styles.text1Clr]}>
        Dividir la cuenta
      </Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={styles.rightSide}>
        <Image
          style={[styles.batteryIcon, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
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
        style={styles.leftSideIcon}
        contentFit="cover"
        source={require("../assets/left-side2.png")}
      />
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <View style={[styles.agregarAdriItem, styles.agregarLayout]} />
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <Text style={styles.todosLosContactos}>Todos los contactos</Text>
      <View style={[styles.agregarAdriInner, styles.agregarLayout]} />
      <Text style={[styles.a, styles.aTypo]}>A</Text>
      <Text style={[styles.b, styles.aTypo]}>B</Text>
      <Text style={[styles.t, styles.tLayout]}>Tú</Text>
      <Text style={[styles.bene, styles.tLayout]}>Bene...</Text>
      <Text style={[styles.adri, styles.tLayout]}>Adri...</Text>
      <View style={[styles.ellipseParent, styles.iconLayout1]}>
        <Image
          style={[styles.groupChild, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>+</Text>
      </View>
      <Text style={[styles.cuentaEntre, styles.tLayout]}>Cuenta entre:</Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("IPhone1314")}
      >
        <View style={styles.groupItem} />
        <Text style={[styles.siguiente, styles.siguientePosition]}>
          SIGUIENTE
        </Text>
      </Pressable>
      <View style={styles.frame}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.label, styles.textTypo1]} numberOfLines={1}>
          Buscar contactos
        </Text>
      </View>
      <Image
        style={[styles.user31Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user3-11.png")}
      />
      <Image
        style={[styles.user32Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user3-11.png")}
      />
      <Image
        style={[styles.user33Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user3-11.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={styles.adrianaSalazar}>Adriana Salazar</Text>
        <Text style={[styles.text1, styles.textTypo]}>8323-8323</Text>
        <Image
          style={[styles.user32Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user3-2.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.arturoFernndez, styles.benjamnDuarteTypo]}>
          Arturo Fernández
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>7547-7557</Text>
        <Image
          style={[styles.user32Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user3-2.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={styles.adrianaSalazar}>Andrea Córdova</Text>
        <Text style={[styles.text1, styles.textTypo]}>8253-8323</Text>
        <Image
          style={[styles.user32Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user3-2.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.benjamnDuarte, styles.text4Position]}>
          Benjamín Duarte
        </Text>
        <Text style={[styles.text4, styles.text4Position]}>7253-7323</Text>
        <Image
          style={[styles.user32Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user3-2.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.benedictoCastillo, styles.text1Position]}>
          Benedicto Castillo
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>7423-2373</Text>
        <Image
          style={[styles.user32Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user3-2.png")}
        />
      </View>
      <Pressable
        style={[styles.postCamarasal151, styles.siguientePosition]}
        onPress={() => navigation.navigate("Inicio1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/post-camarasal15-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  agregarShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text1Clr: {
    color: Color.colorBlack,
    height: 23,
    position: "absolute",
  },
  groupChildPosition: {
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
  agregarLayout: {
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  aTypo: {
    width: 13,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 25,
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  tLayout: {
    height: 20,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 55,
    width: 55,
  },
  textTypo1: {
    fontSize: FontSize.presetsBody2_size,
    textAlign: "left",
  },
  siguientePosition: {
    left: 26,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  groupParentLayout: {
    width: 342,
    height: 38,
    left: 23,
    position: "absolute",
  },
  textTypo: {
    width: 77,
    fontSize: FontSize.size_sm,
    left: 254,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  benjamnDuarteTypo: {
    width: 145,
    left: 50,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
  },
  text4Position: {
    top: 11,
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    position: "absolute",
  },
  text1Position: {
    top: 10,
    textAlign: "left",
  },
  agregarAdriChild: {
    top: -14,
    left: -11,
    backgroundColor: Color.colorRed_100,
    width: 421,
    height: 867,
    position: "absolute",
  },
  dividirLaCuenta: {
    left: 131,
    color: Color.colorWhite,
    width: 128,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    top: 91,
    position: "absolute",
  },
  dividirLaCuenta1: {
    top: 222,
    fontSize: FontSize.size_xl,
    width: 166,
    left: 29,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
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
    width: 67,
    height: 11,
    position: "absolute",
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
  agregarAdriItem: {
    top: 187,
    width: 390,
    height: 676,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  todosLosContactos: {
    top: 365,
    width: 163,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 25,
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  agregarAdriInner: {
    top: 200,
    left: 11,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 365,
    height: 131,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  a: {
    top: 400,
  },
  b: {
    top: 599,
  },
  t: {
    left: 53,
    width: 20,
    fontSize: FontSize.size_xs,
    top: 304,
    height: 20,
    fontFamily: FontFamily.montserratRegular,
  },
  bene: {
    left: 115,
    width: 40,
    fontSize: FontSize.size_xs,
    top: 304,
    height: 20,
    fontFamily: FontFamily.montserratRegular,
  },
  adri: {
    left: 195,
    width: 35,
    fontSize: FontSize.size_xs,
    top: 304,
    height: 20,
    fontFamily: FontFamily.montserratRegular,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 17,
    color: Color.colorGray_400,
    width: 9,
    left: 23,
    fontSize: FontSize.presetsBody2_size,
    height: 20,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  ellipseParent: {
    left: 255,
    top: 246,
    width: 55,
    position: "absolute",
  },
  cuentaEntre: {
    top: 219,
    fontFamily: FontFamily.nunitoSans12ptBold,
    width: 152,
    height: 20,
    fontWeight: "700",
    left: 29,
    fontSize: FontSize.size_mini,
  },
  groupItem: {
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    height: 38,
    width: 168,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  siguiente: {
    letterSpacing: 4.5,
    color: Color.colorDimgray,
    top: 10,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    left: 26,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  rectangleParent: {
    top: 755,
    left: 111,
    height: 38,
    width: 168,
    position: "absolute",
  },
  searchIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  label: {
    lineHeight: 24,
    fontFamily: FontFamily.presetsBody2,
    color: Color.colorGray_500,
    marginLeft: 12,
    overflow: "hidden",
    flex: 1,
  },
  frame: {
    top: 132,
    left: 51,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 297,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  user31Icon: {
    left: 33,
    height: 55,
    width: 55,
    top: 246,
  },
  user32Icon: {
    left: 107,
    height: 55,
    width: 55,
    top: 246,
  },
  user33Icon: {
    left: 181,
    height: 55,
    width: 55,
    top: 246,
  },
  groupChildShadowBox: {
    backgroundColor: Color.colorGray_100,
    width: 342,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    height: 38,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  adrianaSalazar: {
    width: 122,
    left: 50,
    top: 10,
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text1: {
    top: 10,
    textAlign: "left",
    color: Color.colorBlack,
    height: 23,
    position: "absolute",
  },
  user32Icon1: {
    top: 5,
    left: 10,
    width: 29,
    height: 29,
  },
  rectangleGroup: {
    top: 431,
  },
  arturoFernndez: {
    top: 10,
    textAlign: "left",
    color: Color.colorBlack,
    height: 23,
    position: "absolute",
  },
  rectangleContainer: {
    top: 484,
  },
  groupView: {
    top: 537,
  },
  benjamnDuarte: {
    width: 145,
    left: 50,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
  },
  text4: {
    width: 77,
    fontSize: FontSize.size_sm,
    left: 254,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  rectangleParent1: {
    top: 630,
  },
  benedictoCastillo: {
    left: 46,
    width: 144,
    color: Color.colorBlack,
    height: 23,
    position: "absolute",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    top: 10,
  },
  rectangleParent2: {
    top: 683,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  postCamarasal151: {
    width: 14,
    height: 22,
    left: 26,
    top: 91,
  },
  agregarAdri: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default AgregarAdri;
