import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./user.slice";

const userSlice = (state) => state.user || initialState;
export const selectUsers = createSelector([userSlice], (state) => state.users);
export const selectUser = createSelector(
  [userSlice],
  (state) => state.userData
);
