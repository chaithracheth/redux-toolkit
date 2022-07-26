import {createSlice} from "@reduxjs/toolkit";
import {workCatsFetch} from "../sagas/catSaga";

const userSliceReducer = createSlice({
    name:'users',
    initialState: {
        users:[],
        isLoading:false
    },
    reducers:{
        getUsersFetch : (state) => {
            state.isLoading = true
        },
        getUsersFetchSuccess : (state,action) => {
            state.isLoading= false
            state.users = action.payload
        },
        getUsersFetchFailure : (state) => {
            state.isLoading=false
        },
    }
})

export const {getUsersFetch,getUsersFetchFailure,getUsersFetchSuccess} = userSliceReducer.actions

export default userSliceReducer.reducer
