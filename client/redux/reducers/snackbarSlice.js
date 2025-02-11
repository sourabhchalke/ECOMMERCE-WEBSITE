const {createSlice}=require('@reduxjs/toolkit');

const initialState={
    open:false,
    message:"",
    severity:"success"
};

const snackbarSlice = createSlice({
    name:"snackbar",
    initialState,
    reducers:{
        openSnackbar:(state,action)=>{
            state.open=true;
            state.message=action.payload.message;
            state.severity=action.payload.severity;
        },
        closeSnackbar:(state)=>{
            state.open=false;
        },
        
    }
});

module.exports = { snackbarReducer: snackbarSlice.reducer, snackbarActions: snackbarSlice.actions };

