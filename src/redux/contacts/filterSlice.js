import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    hendleChangeContact(_, action) {
      return action.payload;
    },
  },
});

export const { hendleChangeContact } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
