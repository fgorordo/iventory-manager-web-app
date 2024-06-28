import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '@/models/users';

interface UsersState {
  users_data: User[]
} 

const initialState:UsersState = {
  users_data: []
};

interface UpdateUserDto {
  userId: string;
  userUpdates: Partial<User>;
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    onLoadUsersData(state, {payload}: PayloadAction<User[]>) {
      state.users_data = payload;
    },
    onCreateUser(state, {payload}: PayloadAction<User>) {
      state.users_data = [...state.users_data, payload];
    },
    onDeleteUser(state, {payload}: PayloadAction<string>) {
      state.users_data = state.users_data.filter(user => user.id !== payload);
    },
    onUpdateUser(state, {payload}: PayloadAction<UpdateUserDto>) {
      state.users_data = state.users_data.map(user => {
        if (user.id === payload.userId) {
          return {...user, ...payload.userUpdates}
        };
        return user;
      });
    },
  }
});

export const { onLoadUsersData, onCreateUser, onDeleteUser } = usersSlice.actions

export default usersSlice.reducer