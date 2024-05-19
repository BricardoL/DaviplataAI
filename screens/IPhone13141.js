import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13141 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13146}>
      <View style={styles.iphone13146Child} />
      <Text style={styles.presupuesto}>Presupuesto</Text>
      <Image
        style={styles.image3Icon}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={styles.rightSide}>
        <Image
          style={styles.batteryIcon}
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
        source={require("../assets/left-side.png")}
      />
      <Pressable
        style={styles.postCamarasal151}
        onPress={() => navigation.navigate("HomePageactionopenurl")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/post-camarasal15-1.png")}
        />
      </Pressable>
      <View style={styles.iphone13146Item} />
      <View style={styles.iphone13146Inner} />
      <View style={[styles.rectangleView, styles.childLayout]} />
      <View
        style={[styles.iphone13146Child1, styles.iphone13146ChildShadowBox1]}
      />
      <View
        style={[styles.iphone13146Child2, styles.iphone13146ChildShadowBox1]}
      />
      <View
        style={[styles.iphone13146Child3, styles.iphone13146ChildShadowBox1]}
      />
      <Text style={[styles.general, styles.gastosTypo]}>General</Text>
      <View style={[styles.iphone13146Child4, styles.childLayout]} />
      <Text
        style={[styles.tuLiquidezEs, styles.gastosTypo]}
      >{`Tu liquidez es de: $465
`}</Text>
      <View style={[styles.iphone13146Child5, styles.childLayout]} />
      <Text style={[styles.mesada200, styles.textTypo]}>Mesada: $200</Text>
      <View style={[styles.iphone13146Child6, styles.childLayout]} />
      <Text style={[styles.mesada200, styles.textTypo]}>Mesada: $200</Text>
      <Text style={[styles.text, styles.textTypo]}>14/04/2024</Text>
      <View
        style={[styles.iphone13146Child7, styles.iphone13146ChildShadowBox]}
      />
      <View
        style={[styles.iphone13146Child8, styles.iphone13146ChildShadowBox]}
      />
      <Text style={[styles.trabajo365, styles.text2Typo]}>Trabajo: $365</Text>
      <View
        style={[styles.iphone13146Child9, styles.iphone13146ChildShadowBox]}
      />
      <Text style={[styles.matrculaUniversitaria100, styles.text1Typo]}>
        Matrícula universitaria: $100
      </Text>
      <View style={[styles.rectangleParent, styles.childLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.balance, styles.gastosTypo]}>Balance</Text>
      </View>
      <Text style={[styles.ingresos, styles.gastosTypo]}>Ingresos</Text>
      <Text style={[styles.gastos, styles.gastosTypo]}>Gastos</Text>
      <Text style={[styles.text1, styles.text1Typo]}>02/05/2024</Text>
      <Text style={[styles.text2, styles.text2Typo]}>17/04/2024</Text>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 38,
    width: 342,
    position: "absolute",
  },
  iphone13146ChildShadowBox1: {
    height: 37,
    width: 96,
    top: 552,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
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
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo: {
    top: 637,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iphone13146ChildShadowBox: {
    left: 16,
    height: 38,
    width: 342,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  text2Typo: {
    top: 767,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text1Typo: {
    top: 702,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iphone13146Child: {
    top: -14,
    left: -11,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorRed_100,
    width: 421,
    height: 867,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  presupuesto: {
    left: 131,
    color: Color.colorWhite,
    textAlign: "center",
    width: 128,
    height: 23,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    top: 91,
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
    top: 0,
    height: 11,
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
    width: 54,
    height: 21,
    left: 25,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  postCamarasal151: {
    left: 26,
    width: 14,
    height: 22,
    top: 91,
    position: "absolute",
  },
  iphone13146Item: {
    top: 149,
    borderRadius: Border.br_13xl,
    width: 391,
    height: 778,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone13146Inner: {
    top: 612,
    left: 11,
    backgroundColor: "#d24545",
    width: 356,
    height: 214,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorGray_100,
    width: 342,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 18,
    top: 625,
  },
  iphone13146Child1: {
    left: 264,
  },
  iphone13146Child2: {
    left: 18,
  },
  iphone13146Child3: {
    left: 139,
  },
  general: {
    left: 284,
    top: 562,
    textAlign: "left",
  },
  iphone13146Child4: {
    top: 498,
    backgroundColor: Color.colorGray_100,
    width: 342,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 18,
  },
  tuLiquidezEs: {
    top: 510,
    left: 25,
  },
  iphone13146Child5: {
    backgroundColor: Color.colorGray_100,
    width: 342,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 18,
    top: 625,
  },
  mesada200: {
    left: 25,
  },
  iphone13146Child6: {
    backgroundColor: Color.colorGray_100,
    width: 342,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 18,
    top: 625,
  },
  text: {
    left: 271,
  },
  iphone13146Child7: {
    top: 755,
    left: 16,
  },
  iphone13146Child8: {
    top: 755,
    left: 16,
  },
  trabajo365: {
    left: 23,
  },
  iphone13146Child9: {
    top: 690,
  },
  matrculaUniversitaria100: {
    color: "#ff0000",
    left: 23,
  },
  groupChild: {
    backgroundColor: Color.colorGray_100,
    width: 342,
    borderRadius: Border.br_4xs,
    shadowColor: "rgba(217, 217, 217, 0.89)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
  },
  balance: {
    top: 12,
    left: 15,
    width: 122,
    height: 23,
  },
  rectangleParent: {
    top: 170,
    left: 18,
  },
  ingresos: {
    left: 34,
    top: 562,
    textAlign: "left",
  },
  gastos: {
    left: 161,
    top: 562,
    textAlign: "left",
  },
  text1: {
    left: 268,
    color: Color.colorBlack,
    top: 702,
  },
  text2: {
    left: 272,
  },
  image5Icon: {
    top: 216,
    left: 70,
    width: 238,
    height: 270,
    position: "absolute",
  },
  iphone13146: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13141;
