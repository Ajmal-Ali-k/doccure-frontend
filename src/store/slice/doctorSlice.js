import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctor: null,
  name: null,
  token: null,
  Id: null,
};

export const DoctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.doctor = action.payload.doctor;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.Id = action.payload.Id;
    },
    setLogout: (state, action) => {
      state.doctor = null;
      state.name = null;
      state.token = null;
      state.Id = null;
    },
  },
});

export const { setLogin, setLogout } = DoctorSlice.actions;
export default DoctorSlice.reducer;
