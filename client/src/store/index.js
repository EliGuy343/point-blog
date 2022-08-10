import {configureStore, createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: null,
    name: '',
    email: '',
  },
  reducers: {
    loginUser(state, action) {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.name = '';
      state.email = '';
    }
  }
});

export const {loginUser, logoutUser} = userSlice.actions;

export const store = configureStore({
  reducer: {
  user: userSlice.reducer
  }
});