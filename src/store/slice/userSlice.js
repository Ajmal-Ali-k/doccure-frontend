import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: null,
  name: null,
  token: null,
  
};
export const ClientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.client = action.payload.client;
      state.name = action.payload.name;
      state.token = action.payload.token;
    
    },
    setLogout: (state, action) => {
      state.client = null;
      state.name = null;
      state.token = null;
 
    },
  },
});

export const { setLogin, setLogout } = ClientSlice.actions;
export default ClientSlice.reducer;