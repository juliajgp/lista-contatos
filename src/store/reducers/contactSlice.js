import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.data.push({
        id: nanoid(),
        ...action.payload,
      });
    },
    deleteContact: (state, action) => {
      state.data = state.data.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateContact: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const contactIndex = state.data.findIndex(
        (contact) => contact.id === id
      );
      if (contactIndex !== -1) {
        state.data[contactIndex] = { id, name, email, phone };
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;

export default contactSlice.reducer;