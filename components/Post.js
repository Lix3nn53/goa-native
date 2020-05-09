import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import TitleText from "./TitleText";
import BodyText from "./BodyText";
import Colors from "../constants/colors";

const Post = (props) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const renderTextPreview = () => {
    const limit = 240;

    if (props.text && props.text.length > limit) {
      const preview = props.text.substring(0, limit - 1);

      return preview + "...";
    }

    return props.text;
  };

  return (
    <View style={styles.post}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.row, ...styles.postHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            />
          </View>
          <View
            style={{
              ...styles.row,
              ...styles.postDetail,
              ...styles.postTitle,
            }}
          >
            <TitleText numberOfLines={1}>{props.title}</TitleText>
          </View>
          <View style={{ ...styles.row, ...styles.postDetail }}>
            <BodyText>{renderTextPreview()}</BodyText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    height: Dimensions.get("window").height > 600 ? 400 : 200,
    width: "100%",
    backgroundColor: Colors.primary,
    overflow: "hidden",
    marginVertical: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
  postHeader: {
    height: "75%",
    maxHeight: 240,
  },
  postTitle: {
    paddingTop: 10,
  },
  postDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default Post;
