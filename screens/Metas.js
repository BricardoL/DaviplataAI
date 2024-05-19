import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Border,
  Padding,
} from "../GlobalStyles";

const Metas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.metas}>
      <View style={[styles.metasChild, styles.childLayout]} />
      <Text style={[styles.dividirLaCuenta, styles.dividirLaCuentaTypo]}>
        Dividir la cuenta
      </Text>
      <Text style={styles.dividirLaCuenta1}>Dividir la cuenta</Text>
      <Image
        style={[styles.image3Icon, styles.image3IconLayout]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={[styles.rightSide, styles.rightLayout]}>
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
        style={[styles.leftSideIcon, styles.leftIconLayout]}
        resizeMode="cover"
        source={require("../assets/time.png")}
      />
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <View style={[styles.metasItem, styles.metasItemPosition]} />
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <Text style={styles.todosLosContactos}>Todos los contactos</Text>
      <View style={[styles.metasInner, styles.metasShadowBox]} />
      <Text style={[styles.a, styles.aTypo]}>A</Text>
      <Text style={[styles.b, styles.aTypo]}>B</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("AadirAdri")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.tLayout]}>+</Text>
      <Text style={[styles.cuentaEntre, styles.tLayout]}>Cuenta entre:</Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("IPhone1314")}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.siguiente, styles.text1Position]}>SIGUIENTE</Text>
      </Pressable>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupParentLayout]}
        onPress={() => navigation.navigate("AadirAdri")}
      >
        <View style={styles.groupChildShadowBox} />
        <Text style={styles.adrianaSalazar}>Adriana Salazar</Text>
        <Text style={[styles.text1, styles.textTypo]}>8323-8323</Text>
        <Image
          style={styles.user32Icon}
          resizeMode="cover"
          source={require("../assets/user3-2.png")}
        />
      </Pressable>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.arturoFernndez, styles.benjamnDuarteTypo]}>
          Arturo Fernández
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>7547-7557</Text>
        <Image
          style={styles.user32Icon}
          resizeMode="cover"
          source={require("../assets/user3-2.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={styles.adrianaSalazar}>Andrea Córdova</Text>
        <Text style={[styles.text1, styles.textTypo]}>8253-8323</Text>
        <Image
          style={styles.user32Icon}
          resizeMode="cover"
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
          style={styles.user32Icon}
          resizeMode="cover"
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
          style={styles.user32Icon}
          resizeMode="cover"
          source={require("../assets/user3-2.png")}
        />
      </View>
      <Pressable
        style={[styles.postCamarasal151, styles.postLayout]}
        onPress={() => navigation.navigate("HomePageactionopenurl")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/post-camarasal15-1.png")}
        />
      </Pressable>
      <Text style={[styles.t, styles.tLayout]}>Tú</Text>
      <View style={[styles.iphone13147Wrapper, styles.metasItemPosition]}>
        <View style={[styles.iphone13147, styles.metasItemPosition]}>
          <Image
            style={[styles.iphone13147Child, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-1.png")}
          />
          <Text style={[styles.meta, styles.metaFlexBox]}>Meta</Text>
          <Image
            style={[styles.image3Icon1, styles.image3IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-3.png")}
          />
          <View style={[styles.rightSide1, styles.rightLayout]}>
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
            style={[styles.leftSideIcon1, styles.leftIconLayout]}
            resizeMode="cover"
            source={require("../assets/time.png")}
          />
          <Pressable
            style={[styles.postCamarasal1511, styles.postLayout]}
            onPress={() => navigation.navigate("HomePageactionopenurl")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/post-camarasal15-1.png")}
            />
          </Pressable>
          <Text style={[styles.eligeTuMeta, styles.metaFlexBox]}>
            Elige tu meta
          </Text>
          <Text style={[styles.daviplataTeAyuda, styles.dividirLaCuentaTypo]}>
            DaviPlata te ayuda a que vivas tu mejor experiencia financiera.
          </Text>
          <View style={styles.customerQuote}>
            <Text style={styles.planifiquemosEseViaje}>
              Planifiquemos ese viaje...
            </Text>
            <Image
              style={styles.image12Icon}
              resizeMode="cover"
              source={require("../assets/image-12.png")}
            />
            <View style={[styles.avatar, styles.frameFlexBox]}>
              <Image
                style={styles.avatarIcon}
                resizeMode="cover"
                source={require("../assets/avatar.png")}
              />
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.nameTypo]}>Name</Text>
                <Text style={[styles.description, styles.nameTypo]}>
                  Description
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.customerQuote1, styles.customerShadowBox]}>
            <Text style={styles.planifiquemosEseViaje}>
              Planifiquemos ese regalo...
            </Text>
            <View style={[styles.avatar, styles.frameFlexBox]}>
              <Image
                style={styles.avatarIcon}
                resizeMode="cover"
                source={require("../assets/avatar.png")}
              />
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.nameTypo]}>Name</Text>
                <Text style={[styles.description, styles.nameTypo]}>
                  Description
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.customerQuote2, styles.customerShadowBox]}>
            <Text style={styles.planifiquemosEseViaje}>
              Planifiquemos ese regalo...
            </Text>
            <View style={[styles.avatar, styles.frameFlexBox]}>
              <Image
                style={styles.avatarIcon}
                resizeMode="cover"
                source={require("../assets/avatar.png")}
              />
              <View style={styles.nameParent}>
                <Text style={[styles.name, styles.nameTypo]}>Name</Text>
                <Text style={[styles.description, styles.nameTypo]}>
                  Description
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 867,
    width: 421,
    position: "absolute",
  },
  dividirLaCuentaTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  image3IconLayout: {
    width: 100,
    height: 45,
    position: "absolute",
  },
  rightLayout: {
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftIconLayout: {
    height: 21,
    width: 54,
    position: "absolute",
  },
  homePosition: {
    height: 5,
    width: 134,
    left: "50%",
    marginLeft: -67,
    position: "absolute",
  },
  metasItemPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  metasShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    textAlign: "left",
    position: "absolute",
  },
  text1Position: {
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupParentLayout: {
    width: 342,
    left: 23,
    height: 38,
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
  postLayout: {
    height: 22,
    width: 14,
    position: "absolute",
  },
  metaFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  nameTypo: {
    lineHeight: 24,
    fontFamily: FontFamily.bodyText,
    fontSize: FontSize.presetsBody2_size,
    fontWeight: "500",
    textAlign: "left",
  },
  customerShadowBox: {
    left: 17,
    padding: StyleVariable.spacingSM,
    width: 373,
    borderColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  metasChild: {
    top: -14,
    left: -11,
    backgroundColor: Color.colorRed_100,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  dividirLaCuenta: {
    left: 131,
    width: 128,
    height: 23,
    fontSize: FontSize.size_mini,
    top: 91,
  },
  dividirLaCuenta1: {
    top: 222,
    width: 166,
    color: Color.colorBlack,
    fontSize: FontSize.bodyText_size,
    left: 29,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  image3Icon: {
    top: 35,
    left: 145,
    height: 45,
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
    height: 11,
  },
  leftSideIcon: {
    top: 13,
    left: 25,
    height: 21,
    width: 54,
  },
  homeIndicator1: {
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    bottom: 13,
  },
  metasItem: {
    top: 187,
    height: 676,
    borderRadius: Border.br_13xl,
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
  metasInner: {
    top: 201,
    left: 8,
    backgroundColor: Color.colorWhitesmoke_300,
    width: 365,
    height: 131,
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  a: {
    top: 400,
  },
  b: {
    top: 599,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 239,
    width: 55,
    height: 55,
    left: 29,
    position: "absolute",
  },
  text: {
    top: 256,
    left: 52,
    color: Color.colorGray_300,
    width: 9,
    fontSize: FontSize.presetsBody2_size,
    height: 20,
    fontFamily: FontFamily.montserratRegular,
  },
  cuentaEntre: {
    top: 219,
    fontFamily: FontFamily.nunitoSans12ptBold,
    width: 152,
    fontWeight: "700",
    height: 20,
    color: Color.colorBlack,
    left: 29,
    fontSize: FontSize.size_mini,
  },
  groupChild: {
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
    left: 26,
    fontFamily: FontFamily.montserratBold,
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
  frame: {
    top: 132,
    left: 51,
    borderRadius: Border.br_5xs,
    borderColor: Color.colorGainsboro,
    width: 297,
    height: 40,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
    position: "absolute",
    color: Color.colorBlack,
    height: 23,
  },
  user32Icon: {
    top: 5,
    left: 10,
    borderRadius: Border.br_7xs,
    width: 29,
    height: 29,
    position: "absolute",
  },
  rectangleGroup: {
    top: 431,
  },
  arturoFernndez: {
    top: 10,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
    height: 23,
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
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
  },
  rectangleParent2: {
    top: 683,
  },
  postCamarasal151: {
    left: 26,
    top: 91,
  },
  t: {
    top: 294,
    left: 47,
    fontSize: FontSize.size_xs,
    width: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
  },
  iphone13147Child: {
    top: -12,
    left: -16,
  },
  meta: {
    left: 134,
    width: 129,
    top: 93,
    height: 23,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
  },
  image3Icon1: {
    top: 37,
    left: 140,
    height: 45,
  },
  rightSide1: {
    top: 20,
    right: 31,
    height: 11,
  },
  leftSideIcon1: {
    top: 15,
    left: 20,
  },
  postCamarasal1511: {
    left: 21,
    top: 93,
  },
  eligeTuMeta: {
    top: 127,
    left: -27,
    fontSize: FontSize.size_6xl,
    width: 300,
    height: 51,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  daviplataTeAyuda: {
    top: 164,
    left: 35,
    fontSize: FontSize.size_mid,
    width: 326,
    height: 17,
  },
  planifiquemosEseViaje: {
    alignSelf: "stretch",
    lineHeight: 30,
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.bodyText_size,
    textAlign: "left",
  },
  image12Icon: {
    width: 192,
    height: 123,
    marginTop: 48,
  },
  avatarIcon: {
    width: 45,
    height: 45,
  },
  name: {
    color: Color.colorBlack,
  },
  description: {
    color: Color.colorGray_200,
    marginTop: 2,
  },
  nameParent: {
    marginLeft: 16,
  },
  avatar: {
    marginTop: 48,
  },
  customerQuote: {
    top: 230,
    left: 12,
    padding: StyleVariable.spacingSM,
    width: 373,
    borderColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  customerQuote1: {
    top: 437,
  },
  customerQuote2: {
    top: 644,
  },
  iphone13147: {
    top: 0,
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
  iphone13147Wrapper: {
    top: 0,
    height: 844,
  },
  metas: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Metas;
