import React from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    cameraButtonsContainer: {
        width: "100%",
        paddingHorizontal: 32,
        marginBottom: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    snap: {
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        borderWidth: 3,
        borderRadius: 50,
    },
    innerSnap: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 2
    },
    photoPreviewContainer: {
        position: "absolute",
        top: 50,
        left: 10,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 10
    },
    photoPreview: {
        height: 150,
        width: 90,
        borderRadius: 10
    }
})