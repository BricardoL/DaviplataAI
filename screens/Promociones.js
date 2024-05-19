import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Promociones = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.promociones, styles.labelFlexBox]}>
      <Image
        style={styles.promocionesChild}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.promociones1, styles.user31IconLayout]}>
        Promociones
      </Text>
      <Image
        style={[styles.image3Icon, styles.image3IconLayout]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={styles.rightSide}>
        <Image
          style={styles.batteryIcon}
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
      <View style={styles.tabs} />
      <Image
        style={styles.leftSideIcon}
        contentFit="cover"
        source={require("../assets/left-side2.png")}
      />
      <Pressable
        style={styles.postCamarasal151}
        onPress={() => navigation.navigate("Inicio1")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/post-camarasal15-1.png")}
        />
      </Pressable>
      <View style={styles.promocionesItem} />
      <View style={styles.frame}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.label, styles.labelFlexBox]} numberOfLines={1}>
          Buscar promociones como estudiante
        </Text>
      </View>
      <View style={[styles.ellipseParent, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.postCamarasal161, styles.postLayout2]}
          contentFit="cover"
          source={require("../assets/post-camarasal16-1.png")}
        />
      </View>
      <View style={[styles.ellipseGroup, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.postCamarasal162, styles.postLayout2]}
          contentFit="cover"
          source={require("../assets/post-camarasal16-2.png")}
        />
      </View>
      <Text style={styles.restaurantes}>Restaurantes</Text>
      <View style={[styles.promocionesInner, styles.promocionesShadowBox]} />
      <View style={[styles.rectangleView, styles.promocionesShadowBox]} />
      <View style={[styles.promocionesChild1, styles.promocionesShadowBox]} />
      <View style={styles.deDescuentoEnPizzaHutEnT}>
        <Text
          style={[styles.deDescuentoEn, styles.descuentoTypo]}
        >{`15% de descuento
en Pizza Hut en tu siguiente compra`}</Text>
      </View>
      <Text style={[styles.mcflurryGratisEn, styles.descuentoTypo]}>
        McFlurry gratis en tu siguiente compra
      </Text>
      <Text style={[styles.deDescuentoEn1, styles.descuentoTypo]}>
        10% de descuento en KFC en tu siguiente compra
      </Text>
      <ImageBackground
        style={[styles.imageIcon, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image.png")}
      >
        <Image
          style={[styles.image4Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-41.png")}
        />
        <Image
          style={[styles.image8Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
      </ImageBackground>
      <ImageBackground
        style={[styles.imageIcon1, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image.png")}
      >
        <Image
          style={[styles.image6Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <Image
          style={[styles.image9Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </ImageBackground>
      <Pressable
        style={[styles.tabBarItem, styles.tabItemPosition]}
        onPress={() => navigation.navigate("Inicio1")}
      >
        <Text style={styles.inicio}>Inicio</Text>
        <Image
          style={styles.iconhome}
          contentFit="cover"
          source={require("../assets/iconhome1.png")}
        />
      </Pressable>
      <View style={[styles.tabBarItem1, styles.tabItemPosition]} />
      <Text style={[styles.transaccin, styles.perfilTypo]}>Transacción</Text>
      <Text style={[styles.perfil, styles.perfilTypo]}>Perfil</Text>
      <Image
        style={[styles.postCamarasal141, styles.postLayout1]}
        contentFit="cover"
        source={require("../assets/post-camarasal14-1.png")}
      />
      <View style={[styles.postCamarasal142, styles.postLayout1]} />
      <Image
        style={[styles.user31Icon, styles.user31IconLayout]}
        contentFit="cover"
        source={require("../assets/user3-1.png")}
      />
      <View style={[styles.homeIndicator, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.homeLayout]} />
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/group-15.png")}
        />
        <Image
          style={[styles.postCamarasal191, styles.postLayout]}
          contentFit="cover"
          source={require("../assets/post-camarasal19-1.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/group-16.png")}
        />
        <Image
          style={styles.postCamarasal192}
          contentFit="cover"
          source={require("../assets/post-camarasal19-2.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
        <Image
          style={[styles.postCamarasal193, styles.postLayout]}
          contentFit="cover"
          source={require("../assets/post-camarasal19-3.png")}
        />
      </View>
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={styles.image10Icon}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  user31IconLayout: {
    height: 23,
    position: "absolute",
  },
  image3IconLayout: {
    width: 100,
    left: 140,
  },
  groupParentLayout: {
    height: 46,
    width: 46,
    position: "absolute",
  },
  postLayout2: {
    height: 32,
    width: 35,
    position: "absolute",
  },
  promocionesShadowBox: {
    height: 72,
    width: 112,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  descuentoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    position: "absolute",
  },
  imageIconLayout: {
    height: 128,
    width: 229,
    left: 19,
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    width: 235,
    left: -3,
    position: "absolute",
  },
  iconLayout: {
    height: 155,
    width: 232,
    top: -14,
    position: "absolute",
  },
  tabItemPosition: {
    width: 76,
    left: "50%",
    top: 751,
    height: 49,
    position: "absolute",
  },
  perfilTypo: {
    color: Color.colorGray_700,
    bottom: 44,
    fontFamily: FontFamily.interMedium,
    letterSpacing: 0,
    left: "50%",
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  postLayout1: {
    height: 33,
    width: 28,
    top: 753,
    position: "absolute",
  },
  homeLayout: {
    height: 5,
    width: 134,
    left: "50%",
    position: "absolute",
  },
  postLayout: {
    height: 31,
    position: "absolute",
  },
  promocionesChild: {
    left: -16,
    width: 421,
    height: 137,
    top: 0,
    position: "absolute",
  },
  promociones1: {
    top: 96,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    width: 100,
    left: 140,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    height: 23,
  },
  image3Icon: {
    top: 37,
    height: 45,
    width: 100,
    left: 140,
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
    top: 20,
    right: 31,
    width: 67,
    height: 11,
    position: "absolute",
  },
  tabs: {
    top: 151,
    left: 83,
    width: 375,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  leftSideIcon: {
    top: 15,
    left: 20,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  postCamarasal151: {
    left: 21,
    top: 93,
    width: 14,
    height: 22,
    position: "absolute",
  },
  promocionesItem: {
    top: 210,
    left: 33,
    width: 324,
    height: 67,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  searchIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    fontFamily: FontFamily.presetsBody2,
    color: Color.colorGray_500,
    marginLeft: 12,
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
  },
  frame: {
    top: 155,
    left: 71,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    height: 40,
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  postCamarasal161: {
    left: 8,
    top: 7,
  },
  ellipseParent: {
    left: 55,
    top: 221,
    width: 46,
  },
  postCamarasal162: {
    left: 6,
    top: 8,
  },
  ellipseGroup: {
    top: 220,
    left: 114,
  },
  restaurantes: {
    top: 293,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    width: 120,
    color: Color.colorBlack,
    left: 26,
    height: 23,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  promocionesInner: {
    top: 347,
    left: 257,
  },
  rectangleView: {
    top: 496,
    left: 260,
  },
  promocionesChild1: {
    top: 642,
    left: 260,
  },
  deDescuentoEn: {
    top: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  deDescuentoEnPizzaHutEnT: {
    top: 365,
    height: 39,
    width: 114,
    left: 257,
    position: "absolute",
  },
  mcflurryGratisEn: {
    top: 522,
    height: 27,
    width: 114,
    left: 260,
  },
  deDescuentoEn1: {
    top: 662,
    width: 114,
    left: 260,
    height: 40,
  },
  image4Icon: {
    top: -22,
    height: 168,
  },
  image8Icon: {
    height: 134,
    top: 0,
  },
  imageIcon: {
    top: 321,
  },
  image6Icon: {
    left: -1,
  },
  image9Icon: {
    left: -3,
    height: 155,
    width: 232,
    top: -14,
  },
  imageIcon1: {
    top: 465,
  },
  inicio: {
    marginLeft: -11,
    color: Color.colorGray_300,
    width: 26,
    fontFamily: FontFamily.interMedium,
    letterSpacing: 0,
    bottom: 0,
    left: "50%",
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  iconhome: {
    left: 26,
    top: 7,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: -181,
  },
  tabBarItem1: {
    marginLeft: -85,
    opacity: 0.5,
  },
  transaccin: {
    marginLeft: -28,
  },
  perfil: {
    marginLeft: 126,
  },
  postCamarasal141: {
    left: 181,
  },
  postCamarasal142: {
    left: 319,
  },
  user31Icon: {
    top: 759,
    left: 321,
    borderRadius: Border.br_7xs,
    width: 23,
    opacity: 0.65,
  },
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    bottom: 0,
    height: 5,
    width: 134,
  },
  homeIndicator: {
    marginLeft: -66,
    bottom: 18,
  },
  postCamarasal191: {
    width: 39,
    top: 8,
    left: 0,
  },
  groupParent: {
    left: 172,
    top: 221,
    width: 46,
  },
  postCamarasal192: {
    top: 3,
    left: 10,
    width: 30,
    height: 35,
    position: "absolute",
  },
  groupContainer: {
    left: 231,
    top: 221,
    width: 46,
  },
  postCamarasal193: {
    left: 7,
    width: 31,
    top: 7,
  },
  groupView: {
    left: 289,
    top: 221,
    width: 46,
  },
  image7Icon: {
    top: 152,
    left: 22,
    width: 49,
    height: 50,
    position: "absolute",
  },
  image10Icon: {
    top: 603,
    left: 18,
    borderRadius: 14,
    width: 230,
    height: 129,
    position: "absolute",
  },
  promociones: {
    height: 844,
    width: "100%",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flex: 1,
  },
});

export default Promociones;
