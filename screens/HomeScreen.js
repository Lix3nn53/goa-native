import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TitleText from "../components/TitleText";
import Post from "../components/Post";

import { POSTS } from "../data/dummy-data";

const HomeScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <Post
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        text={itemData.item.text}
        onSelect={() => {
          props.navigation.navigate("Post", {
            imageUrl: itemData.item.imageUrl,
            title: itemData.item.title,
            text: itemData.item.text,
          });
        }}
      />
    );
  };

  return (
    <View>
      <TitleText style={styles.title}>Latest Posts</TitleText>
      <FlatList
        keyExtractor={(item, index) => index}
        data={POSTS}
        renderItem={renderGridItem}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: 10,
  },
});

export default HomeScreen;
