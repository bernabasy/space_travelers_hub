import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';
import missionsReducer from './Missions/missions';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;