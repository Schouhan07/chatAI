
import { createSlice } from '@reduxjs/toolkit';

const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState: {
    responses: [],
  },
  reducers: {
    addResponse: (state, action) => {
      state.responses.push(action.payload);
    },
  },
});

export const { addResponse } = chatbotSlice.actions;
export default chatbotSlice.reducer;
