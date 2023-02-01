import { createSlice } from '@reduxjs/toolkit';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
      Notify.failure(`Contact ${action.payload.name}, deleted`);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
