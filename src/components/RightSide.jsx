import '../styles/RightSide.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeTemperature, Celsius, Fahrenheit  } from '../features/temperature';
import dateFormat from '../utils/dateFormat';
import ConvertCelsius2Fahrenheit from '../utils/convertCelsiusToFahrenheit';
/* r02d */
const RightSide = ()=>{
    const weather = useSelector(state => state.weather);
    const temperature = useSelector(state => state.temperature);
    const dispatch = useDispatch();
    return weather && <div className="right-side">
    <div className="wrapper">
        <div className="temperature-btn">
            <div className={`degree${temperature === Celsius ? ' active-btn' : ''}`} onClick={()=>{
                dispatch(changeTemperature(Celsius));
            }}>
                &#8451;
            </div>
            <div className={`degree${temperature === Fahrenheit ? ' active-btn' : ''}`} onClick={()=>{
                dispatch(changeTemperature(Fahrenheit));
            }}>
                &#8457;
            </div>
        </div>
        <div className="forecasts-five-days">
        {
            weather.data.slice(1, 6).map((day, index) => {
                return <div key={day.slp + day.ts + day.valid_date} className="forecast-day">
                            <h2>{index === 0 ? 'Tomorrow' : dateFormat(day.datetime)}</h2>
                            <img src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`} alt="cloud" />
                            <div className='temperature-minmax'>
                            <p className='min'>{Math.round(temperature === Celsius ? day.min_temp : ConvertCelsius2Fahrenheit(day.min_temp))}{temperature===Celsius ? <>&#8451;</>: <>&#8457;</>}</p>
                            <p className='max'>{Math.round(temperature === Celsius ? day.max_temp : ConvertCelsius2Fahrenheit(day.max_temp))}{temperature===Celsius ? <>&#8451;</>: <>&#8457;</>}</p>
                </div>
            </div>
            })
        }
        </div>
        <div className="highlights">
            <h2>Today's Highlights</h2>
            <div className="highlights-container">
                <div className="wind highlight">
                    <h2>Wind status</h2>
                    <div className="value">
                        <h2>{weather.data[0].wind_spd}</h2>
                        <p>mph</p>
                    </div>
                    <div className="compass">
                        <div className="compass-container">
                        <span className="material-symbols-rounded" style={{transform: `rotateZ(${weather.data[0].wind_dir}deg)`}}>
                                    navigation
                        </span>
                        </div>
                        <p>{weather.data[0].wind_cdir}</p>
                    </div>
                </div>
                <div className="highlight">
                    <h2>Humidity</h2>
                    <div className="value">
                        <h2>{weather.data[0].rh}</h2>
                        <p>%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-percent">
                            <p>0</p>
                            <p>50</p>
                            <p>100</p>
                        </div>
                        <div className="progress-line" style={{width: `${weather.data[0].rh}%`}}>

                        </div>
                        <p>%</p>
                    </div>
                </div>
                <div className="highlight">
                    <h2>Visibility</h2>
                    <div className="value">
                        <h2>{Math.round(weather.data[0].vis)}</h2>
                        <p>miles</p>
                    </div>
                </div>
                <div className="highlight">
                    <h2>Air Pressure</h2>
                    <div className="value">
                        <h2>{weather.data[0].pres}</h2>
                        <p>mb</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <p>Created by <a className="github-link" target='_blank' href="https://github.com/celomary">Celomary</a> - devChallenges.io</p>
        </div>
    </div>
    </div>
}

export default RightSide;