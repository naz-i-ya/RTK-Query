import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CovidState {
  active: number;
  recovered: number;
  deaths: number;
}

const initialState: CovidState = {
  active: 0,
  recovered: 0,
  deaths: 0,
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setCovidData: (state, action: PayloadAction<CovidState>) => {
      state.active = action.payload.active;
      state.recovered = action.payload.recovered;
      state.deaths = action.payload.deaths;
    },
  },
});

export const { setCovidData } = covidSlice.actions;
export default covidSlice.reducer;
