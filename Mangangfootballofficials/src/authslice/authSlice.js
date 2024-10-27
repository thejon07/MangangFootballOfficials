import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated:true,
    user:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        // login:(state)=>{
        //     // const isAuth = localStorage.getItem("isauthenticated");
        //     state.isAuthenticated = isAuth;
        // },
        // logout:(state)=>{
        //     state.isAuthenticated = false;
        // }
    }
})

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;