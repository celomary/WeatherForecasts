import Info from "./Info";
import Search from "./Search";
import { useState } from "react";
import '../styles/LeftSide.css';

const LeftSide = ()=>{
    const [activatedSearch, setActivatedSearch] = useState(false);


    const toggleSearch = ()=>{
        setActivatedSearch(activatedSearch => !activatedSearch);
    }

    return <div className="left-side">
        <Info  activateSearch={toggleSearch} toggled={!activatedSearch}/>
        <Search activateSearch={toggleSearch}/>   
    </div>
};

export default LeftSide;