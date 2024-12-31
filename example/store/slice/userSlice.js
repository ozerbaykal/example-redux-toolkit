import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = {
    users: [



    ],

    title: "redux toolkit",
}

const userSlice = createSlice({

    name: "Users",
    initialState,
    reducers: {

        addNewUser: (state, action) => {

            state.users = [...state.users, action.payload]
            Alert.alert("Kullaıcı başarılı bir şekilde eklendi")

        }



    }





})


export const { addNewUser } = userSlice.actions;
export default userSlice.reducer