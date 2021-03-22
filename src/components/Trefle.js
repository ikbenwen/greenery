import React, {useState, useEffect, useContext} from 'react';
import PlantCard from "./PlantCard";
import axios from "axios";
import './Styles/Trefle.css';

const token = "BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc";


export default function Trefle() {

    const [plants, setPlants] = useState([]);
    const [status, setStatus] = useState("loading");
    const [page, setPage] = useState([1]);

    useEffect(() => {
        async function getPlants(){
            try {
                const {data: {data}} = await axios.get(`https://trefle.io/api/v1/species?token=${token}&page=${page}`
                );
                setPlants(data);
                setStatus("done loading");
                console.log('trefle data:',data);
            } catch (e) {
                console.log(e)
                setStatus("error")
            }
        }
        getPlants()
    }, [page])

    return(
        <>

            <div className="plants">
                {plants &&
                plants.map((plants) => {
                return <PlantCard key={plants?.slug} name={plants?.common_name} />;
                })}
            </div>
        </>
    )
}
