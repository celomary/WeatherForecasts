import '../styles/Info.css';
import { useDispatch, useSelector } from 'react-redux';
import getWeatherByGeoLocation from '../api/getWeatherByLocation';
import { Celsius } from '../features/temperature';
import ConvertCelsius2Fahrenheit from '../utils/convertCelsiusToFahrenheit';
import dateFormat from '../utils/dateFormat';
const Info = ({activateSearch, toggled})=>{

    const temperature = useSelector(state => state.temperature);
    const weather = useSelector(state => state.weather);
    const dispatch = useDispatch();

    const geoLocationHandler = ()=>{
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((position)=>{
                getWeatherByGeoLocation(dispatch, position.coords.latitude, position.coords.longitude);
            })
        }
    }
    return weather && <div className={`info${toggled ? ' info-toggled' : ''}`}>
    <div className="btn-container">
        <div className="search-btn" onClick={activateSearch}>
            Search for places
        </div>
        <div className="search-icon" onClick={geoLocationHandler}>
            <span className="icons material-symbols-rounded">
                my_location
            </span>
        </div>
    </div>
    <div className="current-weather-icon-container">
        <div className="wrapper">
            <img src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`}/>
        </div>
    </div>
    <div className="current-weather-temperature">
        <div className="weather-degree">
            <h1 className="temperature-number">{Math.round(temperature === Celsius ? weather.data[0].temp : ConvertCelsius2Fahrenheit(weather.data[0].temp))}</h1>
            <p className="temperature-type">{temperature === Celsius ? <>&#8451;</> : <>&#8457;</>}</p>
        </div>
        <div className="weather-name">
            <p>{weather.data[0].weather.description}</p>
        </div>
        <div className="weather-date">
            <p>Today <span className="date-point">•</span> {dateFormat(weather.data[0].datetime)}</p>
        </div>
        <div className="weather-location">
        <span className="pin material-symbols-rounded">
            pin_drop
        </span>
        <p>{weather.city_name}</p>
        </div>
    </div>
    </div>;
}

export default Info;