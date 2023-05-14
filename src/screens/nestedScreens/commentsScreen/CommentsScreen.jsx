import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import db from "../../../firebase/config";
import styles from "./styles";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";

const getCurrentDate = () => {
  return new Date()
    .toLocaleString([], {
      hour12: false,
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .split("р. о")
    .join("|");
};
export default function CommentsScreen({ route }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const { userName, userId, userAvatar } = useSelector((state) => state.auth);
  const { postId, postPhoto } = route.params;

  const createComment = async () => {
    const createAt = getCurrentDate();

    await db
      .firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, userName, userId, userAvatar, createAt });
  };

  const getComments = async () => {
    await db
      .firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setComments(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse()
        )
      );
  };

  useEffect(() => {
    getComments();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ScrollView>
      <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
        <View style={styles.container}>
            <Image source={{ uri: postPhoto }} style={styles.image} />
            <SafeAreaView style={styles.commentsList}>
              <FlatList
                style={styles.commentsList}
                data={comments}
                renderItem={({ item }) => (
                  <View
                    style={
                      item.userId === userId
                        ? styles.commnentContainer
                        : styles.commnentContainerReverse
                    }
                  >
                    <Image
                      style={styles.userAvatar}
                      source={{ uri: item.userAvatar }}
                    />
                    <View style={styles.commentWrapper}>
                      <Text style={styles.comment}>{item.comment}</Text>
                      <Text style={styles.craeteAt}>{item.createAt}</Text>
                    </View>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>

            <View
              style={{
                ...styles.inputWrapper,
                // marginBottom: isShowKeyboard ? 20 : 1,
              }}
            >
              <TextInput
                multiline={true}
                placeholder="Коментувати..."
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                value={comment}
                onChangeText={setComment}
              />
              <TouchableOpacity onPress={createComment}>
                <View style={styles.icon}>
                  <AntDesign name="arrowup" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>

        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
