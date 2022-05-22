import { setWeather } from "../features/Weather";


const getWeatherByGeoLocation = async (dispatch, lat, lon)=>{
    const data = await (await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${import.meta.env.VITE_API_KEY}`)).json();  
    dispatch(setWeather(data));
}

export default getWeatherByGeoLocation;