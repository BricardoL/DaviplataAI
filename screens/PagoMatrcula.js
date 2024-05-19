import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PagoMatrcula = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pagoMatrcula1, styles.iphone13145Layout]}>
      <View style={[styles.iphone13145, styles.iphone13145Position]}>
        <View style={styles.iphone13145Child} />
        <Text style={styles.pagos}>Pagos</Text>
        <View style={[styles.iphone13145Item, styles.iphone13145Position]} />
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
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side.png")}
        />
        <View style={[styles.iphone13145Inner, styles.image3IconLayout]} />
      </View>
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
        style={[styles.pagoMatrcula1Child, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <View style={[styles.pagoMatrcula1Item, styles.groupChild2ShadowBox]} />
      <Text style={styles.gustavoEstosSon}>
        Gustavo, estos son tus pagos pendientes:
      </Text>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text style={[styles.concepto, styles.montoTypo]}>Concepto</Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-27.png")}
        />
        <Text style={[styles.monto, styles.montoTypo]}>Monto</Text>
        <Image
          style={[styles.groupInner, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-28.png")}
        />
        <Text style={[styles.fechaLmite, styles.fechaTypo]}>Fecha límite</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Text style={[styles.concepto1, styles.montoTypo]}>Concepto</Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-33.png")}
        />
        <Text style={[styles.monto1, styles.montoTypo]}>Monto</Text>
        <Image
          style={[styles.groupChild1, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-28.png")}
        />
        <Text style={[styles.fechaLmite1, styles.iconhomePosition]}>
          Fecha límite
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleLayout]}
          onPress={() => navigation.navigate("PagoMatrcula1")}
        />
        <Text style={[styles.text, styles.textTypo]}>30/05/2024</Text>
        <Text style={styles.text1}>$30.00</Text>
        <Text style={[styles.pagoDeEstacionamiento, styles.pagoTypo]}>
          Pago de estacionamiento
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Text style={[styles.text2, styles.textTypo]}>----</Text>
        <Text style={styles.text1}>$15.00</Text>
        <Text style={[styles.pagoDeCenaEduardo, styles.postCamarasal141Layout]}>
          Pago de cena Eduardo Torrellas
        </Text>
      </View>
      <View style={styles.tabBarItem}>
        <Text style={styles.inicio}>Inicio</Text>
        <Image
          style={[styles.iconhome, styles.iconhomePosition]}
          contentFit="cover"
          source={require("../assets/iconhome1.png")}
        />
      </View>
      <Text style={[styles.transaccin, styles.perfilTypo]}>Transacción</Text>
      <Text style={[styles.perfil, styles.perfilTypo]}>Perfil</Text>
      <Image
        style={[styles.postCamarasal141, styles.postCamarasal141Layout]}
        contentFit="cover"
        source={require("../assets/post-camarasal14-1.png")}
      />
      <Image
        style={styles.user31Icon}
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
  iphone13145Layout: {
    height: 844,
    overflow: "hidden",
  },
  iphone13145Position: {
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  image3IconLayout: {
    width: 100,
    position: "absolute",
  },
  groupItemLayout: {
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  groupChild2ShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    borderRadius: Border.br_4xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  rectanglePosition: {
    left: 18,
    position: "absolute",
  },
  groupChildShadowBox: {
    width: 104,
    backgroundColor: Color.colorBlack,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    borderRadius: Border.br_4xs,
    height: 22,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  montoTypo: {
    height: 10,
    width: 69,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  groupLayout1: {
    width: 84,
    borderRadius: Border.br_4xs,
    height: 22,
    position: "absolute",
  },
  fechaTypo: {
    fontSize: FontSize.size_2xs,
    height: 10,
    width: 69,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
  },
  iconhomePosition: {
    top: 7,
    position: "absolute",
  },
  rectangleLayout: {
    height: 59,
    width: 390,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    height: 19,
    fontSize: FontSize.size_sm,
    top: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  pagoTypo: {
    width: 162,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
  },
  groupLayout: {
    height: 55,
    width: 390,
    left: 0,
    position: "absolute",
  },
  postCamarasal141Layout: {
    height: 33,
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
  homeLayout: {
    height: 5,
    width: 134,
    left: "50%",
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
    top: 95,
    left: 136,
    fontSize: FontSize.size_mini,
    width: 128,
    height: 23,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  iphone13145Item: {
    top: 143,
    borderRadius: Border.br_13xl,
    height: 729,
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
  iphone13145Inner: {
    top: 508,
    left: 54,
    height: 100,
    overflow: "hidden",
  },
  iphone13145: {
    top: 0,
    overflow: "hidden",
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
  pagoMatrcula1Child: {
    top: 303,
    left: 29,
    width: 342,
    height: 38,
  },
  pagoMatrcula1Item: {
    left: 32,
    width: 326,
    height: 47,
    top: 161,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    position: "absolute",
  },
  gustavoEstosSon: {
    left: 48,
    fontSize: FontSize.size_lg,
    width: 332,
    height: 40,
    textAlign: "left",
    color: Color.colorBlack,
    top: 161,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  groupChild: {
    top: 1,
  },
  concepto: {
    top: 2,
    left: 19,
    width: 69,
    fontSize: FontSize.size_smi,
  },
  groupItem: {
    left: 153,
    width: 60,
    height: 22,
    top: 0,
  },
  monto: {
    left: 161,
    top: 1,
  },
  groupInner: {
    left: 279,
    top: 0,
  },
  fechaLmite: {
    top: 4,
    left: 288,
    position: "absolute",
  },
  rectangleParent: {
    top: 241,
    width: 363,
    height: 23,
  },
  rectangleView: {
    top: 0,
  },
  concepto1: {
    left: 19,
    width: 69,
    fontSize: FontSize.size_smi,
    top: 1,
  },
  monto1: {
    left: 162,
    top: 1,
  },
  groupChild1: {
    top: 3,
    left: 280,
  },
  fechaLmite1: {
    left: 289,
    fontSize: FontSize.size_2xs,
    height: 10,
    width: 69,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
  },
  rectangleGroup: {
    top: 402,
    width: 364,
    height: 25,
  },
  rectanglePressable: {
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    borderRadius: Border.br_4xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  text: {
    left: 297,
    width: 86,
  },
  text1: {
    left: 176,
    width: 47,
    height: 16,
    fontSize: FontSize.size_sm,
    top: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  pagoDeEstacionamiento: {
    top: 9,
    height: 37,
    left: 18,
    position: "absolute",
  },
  rectangleContainer: {
    top: 279,
  },
  groupChild2: {
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    borderRadius: Border.br_4xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
  },
  text2: {
    left: 329,
    width: 22,
  },
  pagoDeCenaEduardo: {
    top: 11,
    left: 14,
    width: 162,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
  },
  groupView: {
    top: 442,
  },
  inicio: {
    marginLeft: -11,
    color: Color.colorGray_300,
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
    left: 26,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: -181,
    top: 751,
    width: 76,
    height: 49,
    left: "50%",
    position: "absolute",
  },
  transaccin: {
    marginLeft: -28,
  },
  perfil: {
    marginLeft: 126,
  },
  postCamarasal141: {
    top: 753,
    left: 181,
    width: 28,
  },
  user31Icon: {
    top: 759,
    left: 321,
    borderRadius: Border.br_7xs,
    width: 23,
    opacity: 0.65,
    height: 23,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    bottom: 0,
    height: 5,
    width: 134,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: -66,
    bottom: 18,
  },
  pagoMatrcula1: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
    height: 844,
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

export default PagoMatrcula;
