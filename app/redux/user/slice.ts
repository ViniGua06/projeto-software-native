import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const slice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    email: "",
    password: "",
    photo: "",
  },
  reducers: {
    setUser(state, { payload }) {
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        photo: payload.photo,
      };
    },

    logout(state) {
      return {
        ...state,
        id: "",
        name: "",
        email: "",
        password: "",
        photo: "",
      };
    },
  },
});

export const userReducer = slice.reducer;

export const userSelect = (state: any) => state.persistedReducer;
