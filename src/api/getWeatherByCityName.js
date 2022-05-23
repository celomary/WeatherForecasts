import { setWeather } from "../features/Weather";


const getWeatherByCity = async (dispatch, city)=>{
    const id = await (await fetch(`https://city-id.herokuapp.com/city/${city}`)).json();
    const data = await (await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city_id=${id.cities[0].city_id}&key=${import.meta.env.VITE_API_KEY}`)).json();
    dispatch(setWeather(data));
}

export default getWeatherByCity;