import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { authUserSignUp } from "../../../redux/auth/authSlice";

import styles from "./styles";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const dispatch = useDispatch();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    keyboardHide();
    dispatch(authUserSignUp(state));
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/images/registrationBg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 20 : 80,
              }}
            >
              <View style={styles.photoContainer}>
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate("camera");
                  }}
                  style={styles.cameraBtnContainer}
                >
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View>
                <TextInput
                  placeholder="Ім'я користувача"
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.userName}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, userName: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <TextInput
                  placeholder="Пошта"
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <TextInput
                  placeholder="Пароль"
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.linkWrapper}
                onPress={() => navigation.navigate("Вхід")}
              >
                <Text style={styles.linkText}>Вже маєш акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
