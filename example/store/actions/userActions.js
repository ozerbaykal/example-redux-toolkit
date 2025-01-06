import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { BASE_URL } from "../../service/urls";

const getUser = createAsyncThunk(
    "users/getUser",
    async (params) => {
        const response = await getRequest(BASE_URL, params)
        //console.log(response.data.results)
        return response.data
    }



)

export {
    getUser
}