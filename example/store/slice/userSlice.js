import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            name: "Ahmet",
            surname: "Kozan",
            age: "33",
            adress: "istanbul/tuzla",
            phone: "04948484848",
            email: "test@test.com",
            profilImage: "",
            gender: "erkek",

        },
        {
            id: 2,
            name: "Ahmet",
            surname: "Kozan",
            age: "33",
            adress: "istanbul/tuzla",
            phone: "04948484848",
            email: "test@test.com",
            profilImage: "",
            gender: "erkek",

        },

    ],

    title: "redux toolkit",
}

const userSlice = createSlice({

    name: "Users",
    initialState,
    reducers: {

        addNewUser: (state, action) => {

            state.users = [...state.users, action.payload]

        }



    }





})


export const { addNewUser } = userSlice.actions;
export default userSlice.reducer