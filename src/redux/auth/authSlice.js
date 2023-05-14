import { createSlice } from "@reduxjs/toolkit";
import db from "../../firebase/config";

const authUserSignUp =
    ({ userName, email, password }) =>
        async (dispatch, getSatte) => {
            try {
                await db.auth().createUserWithEmailAndPassword(email, password);

                const user = await db.auth().currentUser;

                await user.updateProfile({
                    displayName: userName,
                });

                const currentUser = await db.auth().currentUser;

                dispatch(
                    handleUpdateUserProfile({
                        userId: currentUser.uid,
                        userName: currentUser.displayName,
                        userAvatar: currentUser.photoURL
                    })
                );
            } catch (error) {
                console.log("error.message", error.message);
            }
        };

const authUserSignIn =
    ({ email, password }) =>
        async (dispatch, getSatte) => {
            try {
                const user = await db.auth().signInWithEmailAndPassword(email, password);
            } catch (error) {
                console.log("error.message", error.message);
            }
        };

const authUserSignOut = () => async (dispatch, getSatte) => {
    await db.auth().signOut();
    dispatch(handleSignOut())
};

const authStateChangeUser = () => async (dispatch, getSatte) => {
    await db.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("USER===>>>>", user)
            dispatch(
                handleUpdateUserProfile({
                    userId: user.uid,
                    userName: user.displayName,
                    userAvatar: user.photoURL
                })
            );
            dispatch(handleStateChange({ stateChange: true }));
        }
    });
};
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        userName: null,
        userAvatar: null,
        stateChange: false,
    },
    reducers: {
        handleUpdateUserProfile: (state, action) => ({
            ...state,
            userId: action.payload.userId,
            userName: action.payload.userName,
            userAvatar: action.payload.userAvatar
        }),
        handleStateChange: (state, action) => ({
            ...state,
            stateChange: action.payload.stateChange,
        }),
        handleSignOut: () => ({
            userId: null,
            userName: null,
            userAvatar: null,
            stateChange: false,
        }),
    },
});

export const { handleUpdateUserProfile, handleStateChange, handleSignOut } = authSlice.actions;
export { authUserSignIn, authUserSignOut, authUserSignUp, authStateChangeUser };
export default authSlice.reducer;
