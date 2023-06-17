import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
      toast.success(`Contact "${payload.name}" is added`);
    },
    deleteContact(state, { payload }) {
      const contactToDelete = state.contacts.find(contact => contact.id === payload);

      if (contactToDelete) {
        state.contacts = state.contacts.filter(contact => contact.id !== payload);
        toast.success(`Contact with name "${contactToDelete.name}" is deleted`);
      }
    },
  },
});


export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact }  = contactsSlice.actions;