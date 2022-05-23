

const getAllCitiesByName = async (setLocations, city_name)=>{
    const locations = await (await fetch(`https://city-id.herokuapp.com/city/${city_name}`)).json();
    setLocations(locations.cities);
}


export default getAllCitiesByName;