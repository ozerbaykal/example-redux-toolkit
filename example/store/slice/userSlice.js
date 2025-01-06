import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { getUser } from "../actions/userActions";

const initialState = {
    users: [
    ],
    pending: false,
    error: ""


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



        },

        updatedUser: (state, action) => {

            const userToUpdate = state.users.find((user) => user.id === action.payload.id)

            if (!userToUpdate) {
                Alert.alert("Hata", "Kullanıcı bulunamadı");
                return;
            }
            const updateUser = { ...userToUpdate, ...action.payload }

            state.users = state.users.map((user) => user.id === action.payload.id ? updateUser : user)




            Alert.alert(" Kullanıcı Güncellendi ")
        }






    },

    extraReducers: builder => {

        builder.addCase(getUser.pending, state => {
            state.pending = true
        })
            .addCase(getUser.fulfilled, (state, action) => {
                //console.log(action.payload)
                state.users = action.payload.results
                state.pending = false
            })
            .addCase(getUser.rejected, (state, action) => {
                state.error = action.error
                state.pending = false
            })
    }





})


export const { addNewUser, deleteUser, updatedUser } = userSlice.actions;
export default userSlice.reducer