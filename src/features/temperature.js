import { createSlice } from "@reduxjs/toolkit";

export const Celsius = 8451;
export const Fahrenheit = 8457;  

const Temperature = createSlice({
    name: "Temperature",
    initialState: Celsius,
    reducers: {
        changeTemperature(state, action){
            return action.payload;
        }
    }
});



export const {changeTemperature} = Temperature.actions;
export default Temperature.reducer;