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
            Alert.alert("Kullanıcı başarılı bir şekilde eklendi")

        },
        deleteUser: (state, action) => {

            state.users = state.users.filter((user) => user.id !== action.payload)

            Alert.alert("Kullanıcı kaldırıldı")



        }




    }





})


export const { addNewUser, deleteUser } = userSlice.actions;
export default userSlice.reducer