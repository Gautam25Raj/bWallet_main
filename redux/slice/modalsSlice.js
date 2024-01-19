import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: "modals",

  initialState: {
    openQrCode: false,
    openAddContact: false,
  },

  reducers: {
    toggleQrCodeModal: (state, action) => {
      state.openQrCode = action.payload;
    },

    toggleAddContactModal: (state, action) => {
      state.openAddContact = action.payload;
    },
  },
});

export const { toggleAddContactModal, toggleQrCodeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
