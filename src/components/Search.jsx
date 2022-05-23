import '../styles/Search.css';

import {  useRef, useState } from 'react';
import getWeatherById from '../api/getWeatherByCityId';
import { useDispatch } from 'react-redux';
import getAllCitiesByName from '../api/getAllCitiesByName';

const Search = ({activateSearch})=>{
    const SearchInput = useRef(null);
    const [foundLocations, setFoundLocations] = useState([]);
    const dispatch = useDispatch();

    const foundLocationHandler = (city_id)=>{
        getWeatherById(dispatch, city_id);
    }
    const SearchHandler = ()=>{
        activateSearch();
        setFoundLocations([]);
    }

    return <div className='search'>
        <span className="close-icon material-symbols-rounded" onClick={SearchHandler}>
            close
        </span>
        <div className="search-container">
            <div className="input-controller">
            <span className="material-symbols-rounded">
                search
            </span>
            <input ref={SearchInput} type="text" placeholder='search location...' />
            </div>
            <div className="btn" onClick={()=>{
                getAllCitiesByName(setFoundLocations, SearchInput.current.value);
            }}>
                Search
            </div>
        </div>
        <div className="found-locations">
        {
            foundLocations.map(city => {
                return <div key={city.city_id} className='f-location' onClick={()=>{
                    foundLocationHandler(city.city_id);
                    SearchHandler();
                }}>
                    <p className="location-name">{city.city_name}{city.country_full ? `, ${city.country_full}`:'' }{!!city.state_code && typeof city.state_code !== 'number' ? ` ,${city.state_code}` : ''}</p>
                    <span className="material-symbols-rounded">
                        navigate_next
                    </span>
            </div>
            })
        }
        </div>
    </div>;
}

export default Search;