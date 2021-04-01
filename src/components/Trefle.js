import React, { useState, useEffect } from 'react';
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
                const {data: {data}} = await axios.get(`https://trefle.io/api/v1/species?token=${token}&page=${page}`);
                setPlants(data);
                setStatus("done loading");
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
                { plants &&
                plants.map((plants) => {
                return <PlantCard
                            key={plants?.slug}
                            name={plants?.slug}
                            id={plants?.id}
                        />;
                })}

                <div className="page-navigation-button-container">
                    <button
                        disabled={page === 0}
                        onClick={() => setPage(page - 1)}
                    >
                        Vorige
                    </button>
                    <button
                        disabled={page === plants?.length < 20}
                        onClick={() => setPage(page + 1)}
                    >
                        Volgende
                    </button>
                </div>
            </div>
        </>
    )
}
