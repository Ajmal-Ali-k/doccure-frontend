import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  adminEmail: null,
  token: null,
};

export const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.admin = action.payload.admin;
      state.adminEmail = action.payload.adminEmail;
      state.token = action.payload.token;
    },
    setLogout: (state, action) => {
      state.admin = null;
      state.adminEmail = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = AdminSlice.actions;
export default AdminSlice.reducer;