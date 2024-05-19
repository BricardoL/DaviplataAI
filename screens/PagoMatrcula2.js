import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PagoMatrcula2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pagoMatrcula4, styles.iphone13145Layout]}>
      <View style={[styles.pagoMatrcula4Child, styles.itemLayout]} />
      <Text style={[styles.yaFuePagado, styles.fueTypo]}>Ya fue pagado</Text>
      <Image
        style={[styles.pagoMatrcula4Item, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <Text style={styles.pagarYa}>Pagar ya</Text>
      <View style={[styles.iphone13145, styles.iphone13145Position]}>
        <View style={[styles.iphone13145Child, styles.childShadowBox]} />
        <Text style={[styles.pagos, styles.pagosLayout]}>Pagos</Text>
        <View style={[styles.iphone13145Item, styles.groupChild4Layout1]} />
        <Image
          style={[styles.image3Icon, styles.image3IconLayout]}
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
        <View style={[styles.iphone13145Inner, styles.image3IconLayout]} />
        <View style={styles.tabBarItem}>
          <Text style={styles.inicio}>Inicio</Text>
          <Image
            style={[styles.iconhome, styles.iconhomeLayout]}
            contentFit="cover"
            source={require("../assets/iconhome1.png")}
          />
        </View>
        <Text style={[styles.transaccin, styles.perfilTypo]}>Transacción</Text>
        <Text style={[styles.perfil, styles.perfilTypo]}>Perfil</Text>
        <Image
          style={styles.postCamarasal141}
          contentFit="cover"
          source={require("../assets/post-camarasal14-1.png")}
        />
        <Image
          style={[styles.user32Icon, styles.pagosLayout]}
          contentFit="cover"
          source={require("../assets/user3-1.png")}
        />
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View style={[styles.homeIndicator1, styles.homeLayout]} />
        </View>
        <View style={[styles.rectangleParent, styles.pagosLayout]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <Text style={[styles.concepto, styles.montoTypo]}>Concepto</Text>
          <Image
            style={[styles.groupItem, styles.itemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-27.png")}
          />
          <Text style={[styles.monto, styles.montoTypo]}>Monto</Text>
          <Image
            style={[styles.groupInner, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-28.png")}
          />
          <Text style={[styles.fechaLmite, styles.fechaTypo]}>
            Fecha límite
          </Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
          <Text style={[styles.concepto1, styles.montoTypo]}>Concepto</Text>
          <Image
            style={[styles.groupItem, styles.itemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
          <Text style={[styles.monto1, styles.montoTypo]}>Monto</Text>
          <Image
            style={[styles.groupChild1, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-28.png")}
          />
          <Text style={[styles.fechaLmite1, styles.fechaTypo]}>
            Fecha límite
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupChild2Layout]}>
          <View style={[styles.groupChild2, styles.groupChildBg]} />
          <Text style={[styles.text, styles.textTypo]}>30/05/2024</Text>
          <Text style={[styles.text1, styles.textTypo]}>$30.00</Text>
          <Text style={[styles.pagoDeEstacionamiento, styles.pagoTypo]}>
            Pago de estacionamiento
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild3, styles.groupLayout]} />
          <Text style={[styles.text2, styles.textTypo]}>----</Text>
          <Text style={[styles.text1, styles.textTypo]}>$15.00</Text>
          <Text style={[styles.pagoDeCenaEduardo, styles.pagoTypo]}>
            Pago de cena Eduardo Torrellas
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupChild4Layout]}>
          <View style={[styles.groupChild4, styles.groupChild4Layout]} />
          <Pressable
            style={[styles.wrapper, styles.wrapperLayout]}
            onPress={() => navigation.navigate("ConfirmarPago")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-241.png")}
            />
          </Pressable>
          <Text style={[styles.gustavo, styles.gustavoPosition]}>Gustavo</Text>
          <Text style={[styles.estasAPunto, styles.gustavoPosition]}>
            Estas a punto de pagar $30.00 en concepto de “Pago de
            estacionamiento”
          </Text>
          <Text style={[styles.continuar, styles.regresarTypo]}>Continuar</Text>
          <Pressable
            style={[styles.container, styles.wrapperLayout]}
            onPress={() => navigation.navigate("PagoMatrcula1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-241.png")}
            />
          </Pressable>
          <Text style={[styles.regresar, styles.regresarTypo]}>Regresar</Text>
        </View>
      </View>
      <Pressable
        style={[styles.postCamarasal151, styles.itemLayout]}
        onPress={() => navigation.navigate("SplitBill")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/post-camarasal15-1.png")}
        />
      </Pressable>
      <Image
        style={styles.pagoMatrcula4Inner}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <View
        style={[styles.pagoMatrcula4Child1, styles.gustavoEstosSonPosition]}
      />
      <Text style={[styles.gustavoEstosSon, styles.gustavoEstosSonPosition]}>
        Gustavo, estos son tus pagos pendientes:
      </Text>
      <Text style={[styles.yaFuePagado1, styles.fueTypo]}>Ya fue pagado</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13145Layout: {
    height: 844,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  itemLayout: {
    height: 22,
    position: "absolute",
  },
  fueTypo: {
    transform: [
      {
        rotate: "-0.3deg",
      },
    ],
    width: 95,
    left: 220,
    height: 13,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  iphone13145Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  pagosLayout: {
    height: 23,
    position: "absolute",
  },
  groupChild4Layout1: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
  },
  image3IconLayout: {
    width: 100,
    position: "absolute",
  },
  iconhomeLayout: {
    width: 24,
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
  groupChildShadowBox: {
    left: 0,
    height: 22,
    width: 104,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
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
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupLayout1: {
    width: 84,
    height: 22,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  fechaTypo: {
    fontSize: FontSize.size_2xs,
    height: 10,
    width: 69,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 59,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_4xs,
  },
  textTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  pagoTypo: {
    width: 162,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 55,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild4Layout: {
    height: 185,
    width: 390,
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 32,
    width: 139,
    top: 122,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  gustavoPosition: {
    left: 64,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  regresarTypo: {
    top: 130,
    height: 13,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  gustavoEstosSonPosition: {
    top: 161,
    position: "absolute",
  },
  pagoMatrcula4Child: {
    left: 214,
    width: 104,
    top: 333,
    height: 22,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorBlack,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  yaFuePagado: {
    top: 335,
  },
  pagoMatrcula4Item: {
    left: 79,
    width: 104,
    top: 333,
    height: 22,
    borderRadius: Border.br_4xs,
  },
  pagarYa: {
    top: 334,
    left: 102,
    width: 57,
    height: 13,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  iphone13145Child: {
    top: -14,
    left: -11,
    backgroundColor: Color.colorRed_100,
    width: 421,
    height: 867,
    position: "absolute",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  pagos: {
    top: 95,
    left: 136,
    fontSize: FontSize.size_mini,
    width: 128,
    textAlign: "center",
    height: 23,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
  },
  iphone13145Item: {
    top: 143,
    height: 729,
    width: 390,
    left: 0,
    position: "absolute",
  },
  image3Icon: {
    top: 35,
    left: 145,
    height: 45,
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
    height: 11,
    width: 67,
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
  inicio: {
    marginLeft: -11,
    color: Color.colorGray_300,
    width: 26,
    fontFamily: FontFamily.interMedium,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    bottom: 0,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  iconhome: {
    left: 26,
    height: 24,
    top: 7,
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: -176,
    top: 751,
    width: 76,
    height: 49,
    left: "50%",
    position: "absolute",
  },
  transaccin: {
    marginLeft: -23,
  },
  perfil: {
    marginLeft: 131,
  },
  postCamarasal141: {
    top: 753,
    left: 186,
    width: 28,
    height: 33,
    position: "absolute",
  },
  user32Icon: {
    top: 759,
    left: 326,
    borderRadius: Border.br_7xs,
    width: 23,
    opacity: 0.65,
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
    marginLeft: -61,
    bottom: 18,
  },
  groupChild: {
    top: 1,
  },
  concepto: {
    top: 2,
    left: 19,
    width: 69,
  },
  groupItem: {
    left: 153,
    width: 60,
    top: 0,
    borderRadius: Border.br_4xs,
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
  },
  rectangleParent: {
    top: 246,
    width: 363,
    left: 18,
  },
  rectangleView: {
    top: 0,
  },
  concepto1: {
    left: 19,
    width: 69,
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
    top: 7,
  },
  rectangleGroup: {
    top: 407,
    width: 364,
    height: 25,
    left: 18,
    position: "absolute",
  },
  groupChild2: {
    height: 59,
    width: 390,
    left: 0,
    position: "absolute",
    top: 0,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text: {
    left: 297,
    width: 86,
    height: 19,
    fontSize: FontSize.size_sm,
    top: 15,
    color: Color.colorBlack,
    position: "absolute",
  },
  text1: {
    left: 176,
    width: 47,
    height: 16,
    fontSize: FontSize.size_sm,
    top: 15,
    color: Color.colorBlack,
    position: "absolute",
  },
  pagoDeEstacionamiento: {
    top: 9,
    height: 37,
    left: 18,
  },
  rectangleContainer: {
    top: 284,
  },
  groupChild3: {
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_4xs,
    top: 0,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text2: {
    left: 329,
    width: 22,
    height: 19,
    fontSize: FontSize.size_sm,
    top: 15,
    color: Color.colorBlack,
    position: "absolute",
  },
  pagoDeCenaEduardo: {
    top: 11,
    left: 14,
    height: 33,
  },
  groupView: {
    top: 447,
  },
  groupChild4: {
    shadowColor: "rgba(130, 130, 130, 0.24)",
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  icon: {
    borderRadius: Border.br_4xs,
  },
  wrapper: {
    left: 40,
  },
  gustavo: {
    top: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratMedium,
    width: 167,
    height: 20,
    fontWeight: "500",
    left: 64,
  },
  estasAPunto: {
    top: 50,
    fontSize: FontSize.presetsBody2_size,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    width: 233,
    height: 19,
  },
  continuar: {
    left: 76,
    width: 67,
  },
  container: {
    left: 210,
  },
  regresar: {
    left: 249,
    width: 61,
  },
  rectangleParent1: {
    top: 336,
  },
  iphone13145: {
    top: 0,
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.colorWhite,
    width: 390,
  },
  postCamarasal151: {
    top: 92,
    width: 14,
    left: 40,
  },
  pagoMatrcula4Inner: {
    top: 303,
    left: 29,
    width: 342,
    height: 38,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  pagoMatrcula4Child1: {
    left: 32,
    width: 326,
    height: 47,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_4xs,
  },
  gustavoEstosSon: {
    left: 48,
    fontSize: FontSize.size_lg,
    width: 332,
    height: 40,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  yaFuePagado1: {
    top: 350,
  },
  pagoMatrcula4: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 844,
    backgroundColor: Color.colorWhite,
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

export default PagoMatrcula2;
