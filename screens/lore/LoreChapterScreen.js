import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import BodyText from "../../components/BodyText";

const LoreChapterScreen = ({ route, navigation }) => {
  const { chapter, title, paragraphes } = route.params;

  navigation.setOptions({
    title: "Chapter " + chapter + ": " + title,
  });

  var paragraphComponents = [];

  paragraphes.forEach((paragraph, index) =>
    paragraphComponents.push(
      <BodyText key={index} style={styles.paragraph}>
        {paragraph}
      </BodyText>
    )
  );

  return (
    <ScrollView style={styles.screen}>
      {paragraphComponents}
      <BodyText />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 5,
  },
  paragraph: {
    paddingTop: 16,
  },
});

export default LoreChapterScreen;
