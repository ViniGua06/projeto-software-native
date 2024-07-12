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
        state.id = payload.id;
        state.name = payload.name;
        state.email = payload.email;
        state.password = payload.password;
        state.photo = payload.photo;      
    },
    logout(state) {      
      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
      state.photo = "";
    },
  },
});

export const userReducer = slice.reducer;

export const { logout, setUser } = slice.actions;

export const userSelect = (state: RootState) => state._persist;
