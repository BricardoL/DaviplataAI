import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const RightSide = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  batteryIcon: {
    top: 0,
    right: 0,
    width: 24,
    position: "absolute",
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
    width: 67,
    height: 11,
  },
});

export default RightSide;
