import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const ImageViewer = () => {
  return (
    <View style={styles.buttonContainer}>
      <Image
        style={styles.image}
        source={require("/Users/asius/Documents/codebase/react-native-app-dev/assets/images/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
