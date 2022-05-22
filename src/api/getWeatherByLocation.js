import axios from "axios";
import { setWeather } from "../features/Weather";


const getWeatherByGeoLocation = (dispatch, lat, lon)=>{
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${import.meta.env.VITE_API_KEY}`).then(data=>{   
    dispatch(setWeather(data.data));
    });
}

export default getWeatherByGeoLocation;