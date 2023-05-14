import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, View, } from "react-native";

import LoginScreen from "../screens/auth/loginScreen";
import RegistrationScreen from "../screens/auth/registrationScreen";
import PostsScreen from "../screens/mainScreen/postsScreen";
import CreatePostsScreen from "../screens/mainScreen/createPostsScreen";
import ProfileScreen from "../screens/mainScreen/profileScreen";
import CameraScreen from "../screens/nestedScreens/cameraScreen";

import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default useRoute = (isAuth) => {
    if (!isAuth) {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen
                    options={{ headerShown: false }}
                    name="Вхід"
                    component={LoginScreen}
                />
                <AuthStack.Screen
                    options={{ headerShown: false }}
                    name="Реєстрація"
                    component={RegistrationScreen}
                />
                <AuthStack.Screen
                    name="camera"
                    options={{ title: "Камера" }}
                    component={CameraScreen}
                ></AuthStack.Screen>
            </AuthStack.Navigator>
        );
    }
    return (
        <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
            <MainTab.Screen
                name="Posts"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={focused ? styles.activeTab : styles.tab}>
                                <AntDesign
                                    name="appstore-o"
                                    size={size}
                                    style={focused ? styles.activeIcon : styles.icon}
                                />
                            </View>
                        );
                    },
                }}
                component={PostsScreen}
            />
            <MainTab.Screen
                name="Create"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        return (
                            <View style={focused ? styles.activeTab : styles.tab}>
                                <Ionicons
                                    name="add-outline"
                                    size={size}
                                    style={focused ? styles.activeIcon : styles.icon}
                                />
                            </View>
                        );
                    },
                }}
                component={CreatePostsScreen}
            />
            <MainTab.Screen
                name="Profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        return (
                            <View style={focused ? styles.activeTab : styles.tab}>
                                <Feather
                                    name="user"
                                    size={size}
                                    style={focused ? styles.activeIcon : styles.icon}
                                />
                            </View>
                        );
                    },
                }}
                component={ProfileScreen}
            />
        </MainTab.Navigator>
    );
};

const styles = StyleSheet.create({
    activeTab: {
        width: 70,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF6C00",
        borderRadius: 20,
    },
    tab: {
        backgroundColor: "transparent",
    },
    activeIcon: { color: "#fff" },
    icon: { color: "#212121", opacity: 0.8 },
});
