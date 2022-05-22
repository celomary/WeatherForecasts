import { createSlice } from "@reduxjs/toolkit";

const WeatherReducer = createSlice({
    name : 'weather',
    initialState: null,
    reducers: {
        setWeather : (state, action) => {
            return action.payload;
        }
    }
});

export  const {setWeather} = WeatherReducer.actions;
export default WeatherReducer.reducer;
