import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ConfirmarPago = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmarPago}>
      <View style={styles.iphone13145}>
        <View style={styles.iphone13145Child} />
        <Text style={styles.pagos}>Pagos</Text>
        <View style={styles.iphone13145Item} />
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
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side.png")}
        />
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={[styles.iphone13145Inner, styles.image3IconLayout]} />
      </View>
      <Pressable
        style={styles.postCamarasal151}
        onPress={() => navigation.navigate("SplitBill")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/post-camarasal15-1.png")}
        />
      </Pressable>
      <Image
        style={styles.confirmarPagoChild}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.groupShadowBox} />
        <Text style={styles.gustavo}>Gustavo</Text>
        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Inicio1")}
        >
          <View style={styles.groupItemShadowBox} />
          <Text style={styles.inicio}>INICIO</Text>
        </Pressable>
        <Text style={[styles.tuDineroEst, styles.tuDineroEstTypo]}>
          Tu dinero está en el lugar correcto
        </Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupShadowBox} />
        <Text style={styles.gustavo}>Gustavo</Text>
        <View style={styles.rectangleGroup}>
        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Inicio1")}
        >
          <View style={styles.groupItemShadowBox} />
          <Text style={styles.inicio}>INICIO</Text>
          </Pressable>
        </View>
        <Text style={[styles.tuDineroEst, styles.tuDineroEstTypo]}>
          Tu dinero está en el lugar correcto
        </Text>
      </View>
      <View style={[styles.pagoExitosoParent, styles.image4IconLayout]}>
        <Text style={[styles.pagoExitoso, styles.tuDineroEstTypo]}>
          Pago exitoso
        </Text>
        <Image
          style={[styles.image4Icon, styles.image4IconLayout]}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image3IconLayout: {
    width: 100,
    position: "absolute",
  },
  tuDineroEstTypo: {
    fontSize: FontSize.presetsBody2_size,
    color: Color.colorBlack,
    height: 23,
    textAlign: "left",
    position: "absolute",
  },
  image4IconLayout: {
    width: 159,
    position: "absolute",
  },
  iphone13145Child: {
    top: -14,
    left: -11,
    backgroundColor: Color.colorRed_100,
    width: 421,
    height: 867,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  pagos: {
    left: 179,
    fontFamily: FontFamily.montserratRegular,
    width: 128,
    height: 23,
    top: 95,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iphone13145Item: {
    top: 146,
    height: 729,
    borderRadius: Border.br_13xl,
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  image3Icon: {
    top: 35,
    left: 145,
    height: 45,
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
    height: 5,
    width: 134,
    left: "50%",
    marginLeft: -67,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 13,
    height: 5,
    width: 134,
    left: "50%",
    marginLeft: -67,
    position: "absolute",
  },
  iphone13145Inner: {
    top: 508,
    left: 54,
    height: 100,
    overflow: "hidden",
  },
  iphone13145: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 844,
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
  confirmarPagoChild: {
    top: 303,
    left: 29,
    width: 342,
    height: 38,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  groupShadowBox: {
    shadowColor: "rgba(130, 130, 130, 0.24)",
    height: 221,
    width: 464,
    borderRadius: Border.br_13xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  gustavo: {
    top: 40,
    fontSize: FontSize.size_xl,
    width: 97,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 85,
    height: 23,
    textAlign: "left",
    position: "absolute",
  },
  groupItemShadowBox: {
    shadowColor: "rgba(217, 217, 217, 0.89)",
    width: 314,
    height: 38,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  inicio: {
    top: 10,
    left: 124,
    letterSpacing: 4.5,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleGroup: {
    top: 165,
    left: 67,
    width: 314,
    height: 38,
    position: "absolute",
  },
  tuDineroEst: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    width: 286,
    fontSize: FontSize.presetsBody2_size,
    left: 85,
    top: 95,
  },
  rectangleParent: {
    top: 434,
    left: -32,
    height: 221,
    width: 464,
    position: "absolute",
  },
  pagoExitoso: {
    top: 184,
    left: 26,
    width: 110,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.presetsBody2_size,
  },
  image4Icon: {
    borderRadius: Border.br_81xl_5,
    height: 155,
    left: 0,
    width: 159,
    top: 0,
  },
  pagoExitosoParent: {
    top: 200,
    left: 116,
    height: 207,
  },
  confirmarPago: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.colorWhite,
    width: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default ConfirmarPago;
