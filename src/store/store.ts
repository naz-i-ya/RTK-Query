import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import covidReducer from './covidSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    covid: covidReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
