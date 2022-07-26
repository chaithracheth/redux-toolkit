import {createSlice} from "@reduxjs/toolkit";

const catSlice = createSlice({
    name:'cats',
    initialState : {
        cats:[],
        isLoading:false
    },
    reducers: {
        getCatsIndex:(state) => {

        },
        getCatsFetch : (state) => {
            state.isLoading = true
        },
        getCatsFetchSuccess : (state,action) => {
            console.log('actions',action)
            state.cats= action.payload
        },
        getCatsFailure : (state) => {
            state.isLoading = false
        }
    }
})
export const catActions =  catSlice.actions
export default catSlice.reducer
