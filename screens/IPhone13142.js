import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  StyleVariable,
  Border,
} from "../GlobalStyles";

const IPhone13142 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13147}>
      <Image
        style={styles.iphone13147Child}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.meta, styles.metaFlexBox]}>Meta</Text>
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
        source={require("../assets/time.png")}
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
      <Text style={[styles.eligeTuMeta, styles.metaFlexBox]}>
        Elige tu meta
      </Text>
      <Text style={styles.daviplataTeAyuda}>
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
        <View style={styles.avatar}>
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
        <View style={styles.avatar}>
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
        <View style={styles.avatar}>
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
  );
};

const styles = StyleSheet.create({
  metaFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  nameTypo: {
    lineHeight: 24,
    fontSize: FontSize.presetsBody2_size,
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
    textAlign: "left",
  },
  customerShadowBox: {
    left: 17,
    padding: StyleVariable.spacingSM,
    width: 373,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: -4,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone13147Child: {
    top: -12,
    left: -16,
    width: 421,
    height: 867,
    position: "absolute",
  },
  meta: {
    left: 134,
    fontSize: FontSize.size_mini,
    width: 129,
    height: 23,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    color: Color.colorWhite,
    top: 93,
  },
  image3Icon: {
    top: 37,
    left: 140,
    width: 100,
    height: 45,
    position: "absolute",
  },
  batteryIcon: {
    top: 0,
    right: 0,
    width: 24,
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
    left: 21,
    width: 14,
    height: 22,
    top: 93,
    position: "absolute",
  },
  eligeTuMeta: {
    top: 127,
    left: -27,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 300,
    height: 51,
  },
  daviplataTeAyuda: {
    top: 164,
    left: 35,
    fontSize: FontSize.size_mid,
    width: 326,
    height: 17,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  planifiquemosEseViaje: {
    alignSelf: "stretch",
    fontSize: FontSize.bodyText_size,
    lineHeight: 30,
    color: Color.colorBlack,
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 48,
  },
  customerQuote: {
    top: 230,
    left: 12,
    padding: StyleVariable.spacingSM,
    width: 373,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: -4,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
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
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone13142;
