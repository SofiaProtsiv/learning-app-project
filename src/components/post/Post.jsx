import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Fontisto, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function Post({ id, description, photo, location, navigation }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.commentsWrapper}
          onPress={() =>
            navigation.navigate("comments", { postId: id, postPhoto: photo })
          }
        >
          <Fontisto
            name="comments"
            size={20}
            style={{ marginRight: 9, color: "#BDBDBD" }}
          />
          <Text style={styles.comments}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("map")}
          style={styles.locationWrapper}
        >
          <EvilIcons
            name="location"
            size={24}
            style={{ marginRight: 9, color: "#BDBDBD" }}
          />
          <Text style={styles.location}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
