import axios from "axios";
import { setWeather } from "../features/Weather";


const getWeatherById = async (dispatch, id)=>{
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city_id=${id}&key=${import.meta.env.VITE_API_KEY}`).then(
        (data)=>{
            dispatch(setWeather(data.data));
        }).catch(error=>{
            console.error(error);
        })
}

export default getWeatherById;