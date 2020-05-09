import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import BodyText from "../../components/BodyText";

import { LORE_CHAPTERS } from "../../data/dummy-data";

const LoreChapterScreen = ({ route, navigation }) => {
  const { chapterNo } = route.params;

  const chapter = LORE_CHAPTERS.find((item) => item.chapter === chapterNo);

  navigation.setOptions({
    title: "Chapter " + chapter.chapter + ": " + chapter.title,
  });

  var paragraphes = [];

  chapter.paragraphes.forEach((paragraph, index) =>
    paragraphes.push(<BodyText key={index}>{paragraph}</BodyText>)
  );

  return (
    <ScrollView style={styles.screen}>
      {paragraphes}
      <BodyText />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default LoreChapterScreen;
