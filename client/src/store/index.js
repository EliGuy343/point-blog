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
    login(state, payload) {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.name = '';
      state.email = '';
    }
  }
});

export const userActions = userSlice.actions;

export const store = configureStore({
  reducer: {
  user: userSlice.reducer
  }
});