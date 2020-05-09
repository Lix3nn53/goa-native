import React from "react";
import { View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import BodyText from "../components/BodyText";

const SinglePostScreen = ({ route, navigation }) => {
  const { imageUrl, title, text } = route.params;

  navigation.setOptions({
    title: "Post: " + title,
  });

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ ...styles.row, ...styles.postHeader }}>
        <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage} />
      </View>
      <View style={{ ...styles.row, ...styles.postContent }}>
        <BodyText>{text}</BodyText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  postHeader: {
    height: "60%",
    maxHeight: 400,
  },
  postContent: {
    padding: 5,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});

export default SinglePostScreen;
