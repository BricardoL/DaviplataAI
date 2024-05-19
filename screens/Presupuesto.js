import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Presupuesto = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.presupuesto}>
      <View style={styles.presupuestoChild} />
      <Text style={[styles.presupuesto1, styles.presupuesto1Typo]}>
        Presupuesto
      </Text>
      <Image
        style={styles.image3Icon}
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
      <Image
        style={styles.leftSideIcon}
        contentFit="cover"
        source={require("../assets/left-side1.png")}
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
      <View style={styles.presupuestoItem} />
      <View style={[styles.homeIndicator, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.homeLayout]} />
      </View>
      <View style={styles.presupuestoInner} />
      <View style={[styles.tuLiquidezEsDeWrapper, styles.liquidezLayout]}>
        <Text
          style={[styles.tuLiquidezEs, styles.liquidezLayout]}
        >{`Tu liquidez es de:
`}</Text>
      </View>
      <Text style={styles.text}>$465</Text>
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text style={[styles.balance, styles.gastosTypo]}>Balance</Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <View style={[styles.rectangleView, styles.groupShadowBox]} />
        <Text style={[styles.general, styles.text3Position]}>General</Text>
        <Text style={[styles.ingresos, styles.text3Position]}>Ingresos</Text>
        <Text style={[styles.gastos, styles.text3Position]}>Gastos</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <Text style={[styles.trabajo, styles.text6Typo]}>Trabajo:</Text>
        <Text style={[styles.text1, styles.textTypo]}>$365</Text>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
          <Text style={[styles.matrculaUniversitaria, styles.text5Typo]}>
            Matrícula universitaria:
          </Text>
          <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
            <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
            <Text style={[styles.mesada, styles.text2Typo]}>{`Mesada: `}</Text>
            <Text style={[styles.text2, styles.text2Typo]}>14/04/2024</Text>
            <Text style={[styles.text3, styles.textTypo]}>$200</Text>
          </View>
          <Text style={[styles.text4, styles.textTypo]}>$100</Text>
          <Text style={[styles.text5, styles.text5Typo]}>02/05/2024</Text>
        </View>
        <Text style={[styles.text6, styles.text6Typo]}>17/04/2024</Text>
      </View>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  presupuesto1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  homeLayout: {
    height: 5,
    width: 134,
    left: "50%",
    position: "absolute",
  },
  liquidezLayout: {
    height: 19,
    width: 112,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 38,
    width: 342,
    position: "absolute",
  },
  groupChildShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    height: 38,
    width: 342,
    borderRadius: Border.br_4xs,
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  gastosTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupShadowBox: {
    width: 96,
    borderRadius: Border.br_smi,
    height: 37,
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    position: "absolute",
  },
  text3Position: {
    top: 10,
    color: Color.colorBlack,
  },
  groupViewLayout: {
    width: 344,
    position: "absolute",
  },
  text6Typo: {
    top: 142,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.presetsBody2_size,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  text5Typo: {
    top: 77,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text2Typo: {
    top: 12,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  presupuestoChild: {
    left: -11,
    backgroundColor: Color.colorRed_100,
    width: 421,
    height: 204,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    position: "absolute",
  },
  presupuesto1: {
    top: 94,
    left: 151,
    color: Color.colorWhite,
    width: 97,
    height: 23,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  image3Icon: {
    top: 35,
    width: 100,
    height: 45,
    left: 145,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  postCamarasal151: {
    left: 26,
    top: 91,
    width: 14,
    height: 22,
    position: "absolute",
  },
  presupuestoItem: {
    top: 137,
    borderRadius: Border.br_13xl,
    width: 391,
    height: 778,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: -66,
    bottom: 19,
  },
  presupuestoInner: {
    top: 576,
    left: 17,
    backgroundColor: "#d24545",
    width: 356,
    height: 214,
    borderRadius: Border.br_4xs,
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
  tuLiquidezEs: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    top: 0,
  },
  tuLiquidezEsDeWrapper: {
    top: 490,
    left: 87,
  },
  text: {
    top: 488,
    left: 217,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  balance: {
    top: 7,
    width: 65,
    color: Color.colorBlack,
    left: 145,
    height: 23,
  },
  rectangleParent: {
    top: 158,
    left: 18,
  },
  groupItem: {
    left: 246,
  },
  groupInner: {
    left: 0,
  },
  rectangleView: {
    left: 121,
  },
  general: {
    left: 266,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  ingresos: {
    left: 16,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  gastos: {
    left: 143,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleGroup: {
    top: 524,
    height: 37,
    left: 22,
    width: 342,
    position: "absolute",
  },
  groupChild1: {
    top: 130,
  },
  trabajo: {
    left: 16,
  },
  text1: {
    top: 141,
    left: 83,
    color: Color.colorBlack,
  },
  groupChild2: {
    top: 65,
  },
  matrculaUniversitaria: {
    color: "#ff0000",
    left: 7,
  },
  groupChild3: {
    top: 0,
  },
  mesada: {
    left: 7,
  },
  text2: {
    left: 253,
  },
  text3: {
    left: 75,
    top: 10,
    color: Color.colorBlack,
  },
  rectangleParent1: {
    left: 2,
    top: 0,
  },
  text4: {
    top: 76,
    left: 185,
    color: Color.colorRed_100,
  },
  text5: {
    left: 252,
    color: Color.colorBlack,
  },
  groupView: {
    height: 103,
    left: 0,
    top: 0,
  },
  text6: {
    left: 249,
  },
  rectangleContainer: {
    top: 589,
    height: 168,
    left: 22,
    width: 344,
  },
  image5Icon: {
    top: 204,
    left: 70,
    width: 238,
    height: 270,
    position: "absolute",
  },
  presupuesto: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Presupuesto;
