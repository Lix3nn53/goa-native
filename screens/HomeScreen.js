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
import { fetchPosts, fetchMorePosts } from "../store/actions";

const HomeScreen = (props) => {
  //const statePrint = useSelector((state) => console.log(state));
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  const [page, setPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(3);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const refreshPosts = useCallback(async () => {
    setPage(1);
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
    if (!posts.currentResults) return;
    if (posts.currentResults.length === posts.totalResults) return;
    if (!hasScrolled) return;

    setIsLoadingMore(true);
    try {
      await dispatch(fetchMorePosts(page + 1, postPerPage));
      if (posts.currentResults.length < posts.totalResults) {
        setPage(page + 1);
      }
    } catch (err) {
      setError(err.message);
    }
    setIsLoadingMore(false);
  }, [dispatch, posts]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", refreshPosts);

    return unsubscribe;
  }, [refreshPosts]);

  useEffect(() => {
    setIsLoading(true);
    refreshPosts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, refreshPosts]);

  const onScroll = useCallback(async () => {
    setHasScrolled(true);
  }, [setHasScrolled]);

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

  const renderFooter = () => {
    if (!isLoadingMore) return null;

    return (
      <View
        style={{
          padding: 40,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  if (error) {
    console.log(error);
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={refreshPosts}
          color={Colors.primary}
        />
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
        onRefresh={refreshPosts}
        refreshing={isRefreshing}
        data={posts.currentResults}
        keyExtractor={(item, index) => "" + index}
        renderItem={renderGridItem}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.1}
        onScroll={onScroll}
        ListFooterComponent={renderFooter}
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
