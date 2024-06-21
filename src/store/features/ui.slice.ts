import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onStartLoading(state) {
        state.isLoading = true;
    },
    onStopLoading(state) {
        state.isLoading = false;
    }
  }
});

export const {onStartLoading, onStopLoading} = uiSlice.actions

export default uiSlice.reducer