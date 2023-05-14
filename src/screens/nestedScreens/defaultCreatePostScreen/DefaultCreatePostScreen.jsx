import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { Entypo, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import db from "../../../firebase/config";
import styles from "./styles";

const initialState = {
  photo: "",
  description: "",
  location: "",
};

export default function CreatePostsScreen({ route, navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const { userId, userName } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!route.params) return;
    setState((prevState) => ({
      ...prevState,
      photo: route.params.photo,
      location: route.params?.location?.city,
      userId,
      userName,
    }));
  }, [route.params]);

  const isFieldsEmpty = state.location && state.description && state.photo;

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const uploadPostToServer = async () => {
    state.photo = await uploadPhotoToServer();
    const post = await db.firestore().collection("posts").add(state);
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(state.photo);
    const file = await response.blob();

    const uniquePostId = Date.now().toString();

    await db.storage().ref(`posts/${uniquePostId}`).put(file);

    const uploadedPhotoUrl = await db
      .storage()
      .ref("posts")
      .child(uniquePostId)
      .getDownloadURL();

    return uploadedPhotoUrl;
  };

  const publishPost = () => {
    if (!isFieldsEmpty) return;
    uploadPostToServer();
    navigation.navigate("defaultPostsScreen", state);

    setState(initialState);
  };

  const clearPost = () => {
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("defaultPostsScreen")}
          >
            <MaterialIcons name="arrow-back-ios" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Створити публікацію</Text>
        </View>
        <View style={styles.form}>
          {state.photo.length ? (
            <View style={{ marginBottom: 32 }}>
              <View style={styles.photoContainer}>
                <Image
                  source={{ uri: state.photo }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("camera");
                }}
              >
                <Text style={styles.photoContainerText}>Редагувати фото</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ marginBottom: 32 }}>
              <View style={styles.photoContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("camera");
                  }}
                  style={styles.cameraBtnContainer}
                >
                  <Entypo name="camera" size={21} style={styles.cameraBtn} />
                </TouchableOpacity>
              </View>
              <Text style={styles.photoContainerText}>Завантажте фото</Text>
            </View>
          )}
          <TextInput
            placeholder="Опис"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
            value={state.description}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, description: value }))
            }
          />
          <TextInput
            placeholder="Локація"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
            value={state?.location}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, location: value }))
            }
          />
          <TouchableOpacity
            onPress={publishPost}
            style={isFieldsEmpty ? styles.btn : styles.btnDisabled}
          >
            <Text
              style={isFieldsEmpty ? styles.btnTitle : styles.btnTitleDisabled}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
          <View style={styles.clearBtnContainer}>
            <TouchableOpacity onPress={clearPost} style={styles.clearBtn}>
              <FontAwesome5
                name="trash-alt"
                size={20}
                style={styles.clearBtnIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
