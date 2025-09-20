import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const ImageViewer = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("/Users/asius/Documents/codebase/react-native-app-dev/assets/images/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
