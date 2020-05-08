import React from "react";
import { FlatList, StyleSheet } from "react-native";

import GridTile from "../../components/GridTile";
import Colors from "../../constants/colors";

import { LORE_CHAPTERS } from "../../data/dummy-data";

const LoreListScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <GridTile
        title={"Chapter " + itemData.item.chapter + ": " + itemData.item.title}
        color={Colors.accent}
        onSelect={() => {
          props.navigation.navigate("LoreChapterScreen", {
            chapterNo: itemData.item.chapter,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={LORE_CHAPTERS}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

LoreListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Lore",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoreListScreen;
