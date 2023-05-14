import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, Text, View } from "react-native";
import db from "../../../firebase/config";
import { authUserSignOut } from "../../../redux/auth/authSlice";
import Post from "../../../components/post";
import styles from "./styles";

export default function DefaultProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const { userId } = useSelector((store) => store.auth);

  const [userPosts, setUserPosts] = useState(null);

  const signOut = () => {
    dispatch(authUserSignOut());
  };

  const getUserPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={userPosts}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <Post
            id={item.id}
            description={item.description}
            location={item.location}
            photo={item.photo}
            navigation={navigation}
          />
        )}
      />
      <Text onPress={signOut}>Exit</Text>
    </View>
  );
}
