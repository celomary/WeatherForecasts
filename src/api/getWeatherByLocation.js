import { setWeather } from "../features/Weather";


const getWeatherByGeoLocation = (dispatch, lat, lon)=>{
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${import.meta.env.VITE_API_KEY}`).then(res => res.json()).then(data=>{   
    dispatch(setWeather(data));
    });
}

export default getWeatherByGeoLocation;