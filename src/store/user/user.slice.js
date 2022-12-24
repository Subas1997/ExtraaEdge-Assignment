import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
  userData: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUsers, setUserData } = slice.actions;

export default slice.reducer;
