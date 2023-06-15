import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.status = action.payload;
    },
  },
});

console.log(filterSlice)

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
