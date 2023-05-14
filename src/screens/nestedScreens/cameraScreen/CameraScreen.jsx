import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function CameraScreen({ navigation }) {
  const [hasLocationPermission, setHasLocationPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const locationStatus = await Location.requestForegroundPermissionsAsync();
      const mediaLibraryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      setHasCameraPermission(cameraStatus.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryStatus.status === "granted");
      setHasLocationPermission(locationStatus.status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    if (camera) {
      const data = await camera.takePictureAsync();
      setPhoto(data.uri);

      let locationName = {};
      if (hasLocationPermission) {
        const location = await Location.getCurrentPositionAsync({});
        locationName = await Location.reverseGeocodeAsync(location.coords);
      }

      navigation.navigate("defaultCreatePostScreen", {
        photo: data.uri,
        location: locationName[0],
      });
    }
  };
  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  const openGallery = async () => {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!data.canceled) {
      setPhoto(data.assets[0].uri);
      navigation.navigate("defaultCreatePostScreen", {
        photo: data.assets[0].uri,
      });
    }
  };

  if (hasCameraPermission === false || hasMediaLibraryPermission === false) {
    return <Text>Give access in setting</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(ref) => setCamera(ref)}
        type={type}
        // onCameraReady={takePhoto}
      >
        {photo && (
          <View style={styles.photoPreviewContainer}>
            <Image style={styles.photoPreview} source={{ uri: photo }} />
          </View>
        )}

        <View style={styles.cameraButtonsContainer}>
          <TouchableOpacity onPress={openGallery}>
            <MaterialIcons name="photo-library" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhoto}>
            <View style={styles.snap}>
              <View style={styles.innerSnap}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleCameraType}>
            <MaterialCommunityIcons
              name="camera-flip-outline"
              size={32}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
