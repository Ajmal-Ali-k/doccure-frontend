import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: null,
  name: null,
  token: null,
  Id: null,
};
export const ClientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.client = action.payload.client;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.Id = action.payload.Id;
    },
    setLogout: (state, action) => {
      state.client = null;
      state.name = null;
      state.token = null;
      state.Id = null;
    },
  },
});

export const { setLogin, setLogout } = ClientSlice.actions;
export default ClientSlice.reducer;
