import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../features/Weather";
import temperature from "../features/temperature";
export const store = configureStore({
    reducer: {
        weather: WeatherReducer,
        temperature: temperature,
    }
});

