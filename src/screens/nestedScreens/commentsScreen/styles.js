import React from "react";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    // justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 10,
    marginBottom: 32,
  },
  commentsList: {
    // flex: 1,
    // flexGrow:1,
    // height: "100%",
    // zIndex:999
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  input: {
    width: "85%",
    fontSize: 16,
    color: "#212121",
    backgroundColor: "transparent",
  },
  icon: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  commnentContainer: {
    flexDirection: "row",
    columnGap: 20,
    marginBottom: 24,
  },
  commnentContainerReverse:{
    width:"100%",
    columnGap: 20,
    marginBottom: 24,
    flexDirection:"row-reverse"
  },
  userAvatar: {
    width: 28,
    height: 28,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 50,
  },
  commentWrapper: {
    width:315,
    padding: 16,
    backgroundColor: "#f7f7f7",
    borderRadius: 6,
  },
  comment: {
    fontSize: 16,
    lineHeight: 18,
    color: "#212121",
  },
  craeteAt: {
    fontSize: 13,
    lineHeight: 12,
    textAlign: "right",

    color: "#BDBDBD",
  },
});
