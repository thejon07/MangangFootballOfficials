import { configureStore } from "@reduxjs/toolkit";
import auth from "../authslice/authSlice"

export const store = 
    configureStore({
      reducer:{
        auth:auth
      }
    })
