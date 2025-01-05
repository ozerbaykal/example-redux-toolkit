import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { BASE_URL } from "../../service/urls";

const getUser = createAsyncThunk(
    "users/getUser",
    async () => {
        const response = await getRequest(BASE_URL)
        //console.log(response.data.results)
        return response.data
    }



)

export {
    getUser
}