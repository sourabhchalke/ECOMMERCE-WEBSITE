import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.currentUser = action.payload.user;
        },
        loginSuccess: (state, action) => {
            console.log("Login Success Payload:", action.payload);
            state.currentUser = action.payload.user;
            localStorage.setItem("shop-cart-token", action.payload.token);
          },
          logout: (state) => {
            console.log("Logging out...");
            state.currentUser = null;
            localStorage.removeItem("shop-cart-token");
          }
    }
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
