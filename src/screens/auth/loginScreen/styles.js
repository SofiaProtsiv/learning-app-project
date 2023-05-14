import React from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    form: {
        width: "100%",
        paddingTop: 30,
        paddingHorizontal: 16,
        paddingBottom: 145,
        backgroundColor: "#fff",
        borderRadius: 25,
    },
    title: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 40,
        color: "#212121",
        fontFamily: "Roboto-Regular",
    },
    inputTitle: {
        color: "#212121",
        marginBottom: 10,
        fontSize: 18,
        fontFamily: "Roboto-Regular",
    },
    input: {
        height: 50,
        padding: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        color: "#212121",
        backgroundColor: "#F6F6F6",
    },
    btn: {
        height: 50,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        border: "none",
    },
    btnTitle: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Roboto-Regular",
    },
    linkText: {
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371"
    },
    linkWrapper: {
        marginTop: 16,
    }
});