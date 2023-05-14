import React from "react";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    item: {
        width: "100%",
        height: 240,
        borderRadius: 10,
        marginBottom: 90,
    },
    image: { width: "100%", height: 240, borderRadius: 10, marginBottom: 8 },
    description: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
        marginBottom: 11
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    locationWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    location: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: "right",
        textDecorationLine: "underline",
        color: "#212121",
    },
    commentsWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    comments: {
        color: "#BDBDBD", fontSize: 16,
        lineHeight: 19,
    }
});
