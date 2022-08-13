import {configureStore, createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: null,
    name: '',
    email: '',
    id:''
  },
  reducers: {
    loginUser(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    authUser(state, action) {
      state.isLoggedIn = true;
      state.token = localStorage.getItem('token');
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.id = action.payload.user._id;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.name = '';
      state.email = '';
    }
  }
});

export const {loginUser, authUser, logoutUser} = userSlice.actions;

export const store = configureStore({
  reducer: {
  user: userSlice.reducer
  }
});