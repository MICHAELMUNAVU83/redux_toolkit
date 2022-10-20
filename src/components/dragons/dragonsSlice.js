import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDragons = createAsyncThunk(
  "dragons/fetchDragons",
  async () => {
    const response = await fetch("https://api.spacexdata.com/v3/rockets");
    return response.json();
  }
);

const initialState = {
  dragons: [],
};

const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    changeReservation(state, action) {
      const dragon = state.dragons.find(
        (dragon) => dragon.id === action.payload.id
      );
      if (dragon) {
        Object.assign(dragon, { reserved: !dragon.reserved });
      }
    },
  },
  extraReducers: {
    [fetchDragons.fulfilled]: (state, action) => {
      state.dragons = action.payload;
    },
  },
});

export default dragonsSlice.reducer;

export const { changeReservation } = dragonsSlice.actions;
