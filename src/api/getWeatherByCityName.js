import { setWeather } from "../features/Weather";
/*import getCityId from "../utils/getCityIdByName"*/;


const getWeatherByCity = async (dispatch, city)=>{
    const data = await (await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city_id=${445788/*getCityId(city)*/}&key=${import.meta.env.VITE_API_KEY}`)).json();
    dispatch(setWeather(data));
}

export default getWeatherByCity;