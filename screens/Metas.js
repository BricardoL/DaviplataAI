import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Metas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.metas}>
      <Image
        style={styles.metasChild}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.metas1, styles.metas1Layout]}>Metas</Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={styles.rightSide}>
        <Image
          style={[styles.batteryIcon, styles.iconhomeLayout]}
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
      <Pressable
        style={styles.postCamarasal151}
        onPress={() => navigation.navigate("Inicio1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/post-camarasal15-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.image11Icon, styles.metasItemPosition]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={[styles.metasItem, styles.metasShadowBox]} />
      <Image
        style={[styles.image14Icon, styles.metasInnerPosition]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <View style={styles.tabs} />
      <View style={[styles.metasInner, styles.metasInnerPosition]} />
      <Text style={[styles.planifiquemosElViaje, styles.planifiquemosLayout]}>
        Planifiquemos el viaje de tus sueños...
      </Text>
      <Text style={[styles.planifiquemosUnRegalo, styles.planifiquemosLayout]}>
        Planifiquemos un regalo especial...
      </Text>
      <Text style={[styles.eligeTuMeta, styles.planifiquemosLayout]}>
        Elige tu meta
      </Text>
      <Text style={[styles.daviplataTeAyuda, styles.metas1Typo]}>
        DaviPlata te ayuda a que vivas tu mejor experiencia financiera.
      </Text>
      <Pressable
        style={[styles.tabBarItem, styles.tabItemPosition]}
        onPress={() => navigation.navigate("Inicio1")}
      >
        <Text style={styles.inicio}>Inicio</Text>
        <Image
          style={[styles.iconhome, styles.iconhomeLayout]}
          contentFit="cover"
          source={require("../assets/iconhome2.png")}
        />
      </Pressable>
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
        style={[styles.user31Icon, styles.metas1Layout]}
        contentFit="cover"
        source={require("../assets/user3-1.png")}
      />
      <View style={[styles.homeIndicator, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.homeLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metas1Layout: {
    height: 23,
    position: "absolute",
  },
  iconhomeLayout: {
    width: 24,
    position: "absolute",
  },
  metasItemPosition: {
    top: 239,
    position: "absolute",
  },
  metasShadowBox: {
    height: 71,
    width: 187,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  metasInnerPosition: {
    top: 495,
    position: "absolute",
  },
  planifiquemosLayout: {
    height: 51,
    textAlign: "center",
    position: "absolute",
  },
  metas1Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
  },
  tabItemPosition: {
    width: 76,
    left: "50%",
    height: 49,
    top: 751,
    position: "absolute",
  },
  perfilTypo: {
    color: Color.colorGray_700,
    bottom: 44,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  postLayout: {
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
  metasChild: {
    left: -16,
    width: 421,
    height: 273,
    top: 0,
    position: "absolute",
  },
  metas1: {
    top: 95,
    left: 171,
    width: 48,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    height: 23,
  },
  image3Icon: {
    top: 37,
    left: 140,
    width: 100,
    height: 45,
    position: "absolute",
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
    top: 20,
    right: 31,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 15,
    left: 20,
    width: 54,
    height: 21,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  postCamarasal151: {
    top: 93,
    width: 14,
    height: 22,
    left: 21,
    position: "absolute",
  },
  image11Icon: {
    left: 47,
    borderRadius: 49,
    width: 329,
    height: 220,
  },
  metasItem: {
    borderRadius: 31,
    top: 239,
    position: "absolute",
    left: 21,
  },
  image14Icon: {
    left: 41,
    borderRadius: 35,
    width: 333,
    height: 220,
  },
  tabs: {
    right: -6,
    height: 49,
    top: 751,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  metasInner: {
    left: 17,
    borderRadius: 30,
    height: 71,
    width: 187,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  planifiquemosElViaje: {
    top: 259,
    left: 22,
    width: 186,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    height: 51,
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  planifiquemosUnRegalo: {
    top: 515,
    left: 18,
    width: 186,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    height: 51,
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  eligeTuMeta: {
    top: 139,
    left: -6,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 300,
    height: 51,
    textAlign: "center",
    color: Color.colorWhite,
  },
  daviplataTeAyuda: {
    top: 176,
    left: 56,
    fontSize: 17,
    width: 326,
    height: 17,
    position: "absolute",
  },
  inicio: {
    marginLeft: -11,
    color: "rgba(0, 0, 0, 0.48)",
    width: 26,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    bottom: 0,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  iconhome: {
    top: 7,
    left: 26,
    height: 24,
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: -177,
  },
  tabBarItem1: {
    marginLeft: -71,
    opacity: 0.5,
  },
  transaccin: {
    marginLeft: -24,
  },
  perfil: {
    marginLeft: 130,
  },
  postCamarasal141: {
    left: 185,
  },
  postCamarasal142: {
    left: 333,
  },
  user31Icon: {
    top: 759,
    left: 325,
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
    marginLeft: -58,
    bottom: 18,
  },
  metas: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Metas;
