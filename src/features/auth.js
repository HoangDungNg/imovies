import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem('session_id');

      localStorage.setItem('accountId', action.payload.id);
    },
  },
});

export const { setUser } = authSlice.actions;

// export the entire reducer for connecting to the redux store
export default authSlice.reducer;

// simplify the process of extracting the user details
// the similar process of extracting data from createSlice (not simplified one) can be found in Movies.jsx
// state.user accessing the defined 'user' state in the redux store (store.js)
export const userSelector = (state) => state.user;
