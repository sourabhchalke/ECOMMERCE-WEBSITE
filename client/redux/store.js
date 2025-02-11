const { configureStore, combineReducers } = require('@reduxjs/toolkit');
const {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} = require('redux-persist');

const storage = require('redux-persist/lib/storage');
const userReducer = require('./reducers/userSlice');
const snackbarReducer = require('./reducers/snackbarSlice');

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    snackbar: snackbarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

module.exports = { store, persistor };
