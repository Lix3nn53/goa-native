import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Button,
  Text,
  ActivityIndicator,
} from "react-native";
import TitleText from "../components/TitleText";
import Post from "../components/Post";
import Colors from "../constants/colors";

import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/actions";

const HomeScreen = (props) => {
  //const statePrint = useSelector((state) => console.log(state));
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  const [page, setPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(3);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const loadPosts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(fetchPosts(page, postPerPage));
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  const loadMorePosts = useCallback(async () => {
    if (posts.currentResults.length === posts.totalResults) return;

    setIsLoadingMore(true);
    try {
      await dispatch(fetchPosts(page + 1, postPerPage));
      setPage(page + 1);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoadingMore]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadPosts);

    return unsubscribe;
  }, [loadPosts]);

  useEffect(() => {
    setIsLoading(true);
    loadPosts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadPosts]);

  const renderGridItem = (itemData) => {
    return (
      <Post
        title={itemData.item.title}
        imageUrl={itemData.item.image}
        text={itemData.item.text}
        onSelect={() => {
          props.navigation.navigate("Post", {
            imageUrl: itemData.item.image,
            title: itemData.item.title,
            text: itemData.item.text,
          });
        }}
      />
    );
  };

  if (error) {
    console.log(error);
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button title="Try again" onPress={loadPosts} color={Colors.primary} />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && posts.currentResults && posts.currentResults.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No posts found. Maybe start adding some!</Text>
      </View>
    );
  }

  return (
    <View>
      <TitleText style={styles.title}>Latest Posts</TitleText>
      <FlatList
        onRefresh={loadPosts}
        refreshing={isRefreshing}
        data={posts.currentResults}
        keyExtractor={(item, index) => "" + index}
        renderItem={renderGridItem}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.5}
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
