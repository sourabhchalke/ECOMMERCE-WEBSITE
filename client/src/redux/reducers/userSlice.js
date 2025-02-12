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
            state.currentUser = action.payload.user;
            localStorage.setItem("shop-cart-token", action.payload.token);
        },
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem("shop-cart-token");
        }
    }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
