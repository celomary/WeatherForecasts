import './App.css'
import { useEffect } from 'react';
import getWeatherByCity from './api/getWeatherByCityName';
import {useDispatch, useSelector} from 'react-redux';
import getWeatherByGeoLocation from './api/getWeatherByLocation';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);
  useEffect(()=>{
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((position)=>{
         getWeatherByGeoLocation(dispatch, position.coords.latitude, position.coords.longitude);
      }, failure => {
        getWeatherByCity(dispatch, 'london');
      });
    }
    else 
    {
      getWeatherByCity(dispatch, 'london');
    }
  }, []);
  return (<div className="container">
      <LeftSide />
      <RightSide />
  </div>
  )
}

export default App
