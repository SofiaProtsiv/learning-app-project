import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import db from "../../../firebase/config";

import Post from "../../../components/post";

import styles from "./styles";

export default function DefaultPostScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (item) {
            return (
              <Post
                id={item.id}
                description={item.description}
                location={item.location}
                photo={item.photo}
                navigation={navigation}
              />
            );
          }
        }}
      />
    </View>
  );
}
