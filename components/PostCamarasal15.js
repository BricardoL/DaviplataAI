import * as React from "react";
import { ImageBackground, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostCamarasal15 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.postCamarasal152}
      onPress={() => navigation.navigate("HomePageactionopenurl")}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/post-camarasal15-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  postCamarasal152: {
    width: 14,
    height: 22,
  },
});

export default PostCamarasal15;
