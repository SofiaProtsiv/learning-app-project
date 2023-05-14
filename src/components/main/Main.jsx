import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "../../navigation/routes";
import { authStateChangeUser } from "../../redux/auth/authSlice";

export default function Main() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authStateChangeUser(state));
  }, []);

  const routing = useRoute(state.stateChange);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
