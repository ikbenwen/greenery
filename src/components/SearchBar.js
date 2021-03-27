import React, {useState, useEffect} from 'react';
import PlantCard from "./PlantCard";
import axios from "axios";
import searchIcon from '../assets/search-icon.png';
import './Styles/SearchBar.css'

const token = "BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc";

export default function SearchBar(){

    const [plants,setPlants] = useState([])
    const [status, setStatus] = useState(['loading'])
    const [query, setQuery] = useState(['']);
    const [url, setUrl] = useState([`https://trefle.io/api/v1/species/search?token=${token}`]);

    useEffect(() => {
        async function getPlants(){
            try {
                const {data: {data}} = await axios.get(url);
                setPlants(data);
                setStatus("done loading");
            } catch (e) {
                console.log(e)
                setStatus("error")
            }
        }
        getPlants()
    }, [url])

    return(
        <>
            <h1>Search</h1>
            <div className="search-container" >
            <div className="search">
            <input
                className="search-term"
                type="text"
                value={query}
                placeholder="Let's find some plant-information!"
                onChange={event => setQuery(event.target.value)}
            />
            <button className="search-button" type="submit" onClick={() => setUrl(` https://trefle.io/api/v1/species/search?token=${token}&q=${query}`)}>
                <img src={searchIcon} />
            </button>
            </div>
            </div>
            <div className="plants">
                {plants &&
                plants.map((plants) => {
                    return <PlantCard key={plants?.slug} name={plants?.slug} id={plants?.id}/>;
                })}
            </div>
        </>
    )
}

