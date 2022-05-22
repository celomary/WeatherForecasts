import axios from "axios";
import { setWeather } from "../features/Weather";
import getCityId from "../utils/getCityIdByName";


const getWeatherByCity = async (dispatch, city)=>{
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city_id=${getCityId(city)}&key=${import.meta.env.VITE_API_KEY}`).then(
        (data)=>{
            dispatch(setWeather(data.data));
        }).catch(error=>{
            console.error(error);
        })
}

export default getWeatherByCity;