import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducer/Index';

const store = configureStore({
  reducer: reducer

});

export default store;