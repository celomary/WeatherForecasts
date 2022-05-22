import { setWeather } from "../features/Weather";
import getCityId from "../utils/getCityIdByName";


const getWeatherByCity = async (dispatch, city)=>{
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city_id=${getCityId(city)}&key=${import.meta.env.VITE_API_KEY}`).then(res=> res.json()).then(
        (data)=>{
            dispatch(setWeather(data));
        }).catch(error=>{
            console.error(error);
        })
}

export default getWeatherByCity;