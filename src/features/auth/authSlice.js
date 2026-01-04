import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {
  username :"user"
  },
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{

    // login reducer
    loginSuccess : (state, action) =>{
        const{user, accessToken, refreshToken} = action.payload ;

        state.user = user ;
        state.accessToken = accessToken ;
        state.refreshToken = refreshToken ;
        state.isAuthenticated = true;

    },

    // logout reducer

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken= null;
      state.isAuthenticated = false;
    },
  },

});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;