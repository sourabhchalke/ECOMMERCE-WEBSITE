const {createSlice}=require('@reduxjs/toolkit');

const initialState={
    currentUser:null,
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUser:(state,action)=>{
            state.currentUser=action.payload.user;
        },
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload.user;
            localStorage.setItem("shop-cart-token",action.payload.token);
        },
        logout:(state,action)=>{
            state.currentUser=null;
            localStorage.removeItem("shop-cart-token");
        }
    }
});

module.exports = { userReducer: userSlice.reducer, userActions: userSlice.actions };

