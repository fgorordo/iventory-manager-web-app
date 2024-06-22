import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '@/models/users';

interface UsersState {
  users_data: User[]
} 

const initialState:UsersState = {
  users_data: []
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    onLoadUsersData(state, {payload}: PayloadAction<User[]>) {
      state.users_data = payload;
    },
  }
});

export const { onLoadUsersData } = usersSlice.actions

export default usersSlice.reducer