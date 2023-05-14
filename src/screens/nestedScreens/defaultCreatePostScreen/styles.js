import React from "react";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: "100%",
        paddingTop: 75,
        padding: 16,
        flexDirection: "row",
        backgroundColor: "#fff",
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        alignItems: "center"
    },
    headerText: {
        marginLeft: 75,
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
        letterSpacing: -0.408,
        color: "#212121",
    },
    form: {
        width: "100%",
        height: "100%",
        gap: 16,
        padding: 16,
        paddingTop: 32,
        backgroundColor: "#fff"
    },
    input: {
        height: 50,
        paddingVertical: 16,
        fontSize: 16,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        borderRadius: 8,
        color: "#212121",
        backgroundColor: "transparent",
    },
    btn: {
        height: 50,
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        border: "none",
    },
    btnDisabled: {
        height: 50,
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        borderRadius: 100,
        border: "none",
    },
    btnTitle: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Roboto-Regular",
    },
    btnTitleDisabled: {
        color: "#BDBDBD",
        fontSize: 18,
        fontFamily: "Roboto-Regular",
    },
    clearBtnContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 20
    },
    clearBtn: {
        width: 70,
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: "#F6F6F6",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    clearBtnIcon: {
        color: "#BDBDBD",
    },
    linkText: {
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
    },
    linkWrapper: {
        marginTop: 16,
    },
    photoContainer: {
        width: "100%",
        height: 240,
        backgroundColor: "#F6F6F6",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    photoContainerText: {
        marginTop: 8,
        fontSize: 16,
        lineHeight: 19,
        color: "#BDBDBD",
    },
    cameraBtnContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    cameraBtn: {
        color: "#BDBDBD",
    },
});
