import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Styles/PlantCard.css';
import sun from '../assets/icon-sun.png';

const token = "BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc";

export default function PlantCard(props) {

    const [plant, setPlant] = useState(null);

    useEffect(() => {
        async function getPlantData() {
            try {
                const {data,} = await axios.get(
                    `https://trefle.io/api/v1/species/${props.id}?token=${token}`
                )
                setPlant(data.data)
            } catch (e) {
                console.log(e)
            }
        }

        getPlantData();
    },[props.id]);


    let edible = plant?.edible;

    function IsEatable(edible) {
        if (edible !== true)  {
            return <p>This plant is not edible</p>;
        }else{
        return <p>This plant is edible</p>;
    }}

    return(
        <>
            <div className="plant-card-container"  >
                <div className="plant-card-name-container">
                    <img src={plant?.image_url} className="plant-card-img" alt={plant?.common_name} />
                    <h4>{plant?.common_name}️</h4>
                    <p>{plant?.scientific_name}</p>
                    <p>{plant?.family_common_name}</p>
                    <div className="plant-card-light">
                        <img className="icon" src={ sun }/>
                        <progress value={plant?.growth.light}  max={10} />
                    </div>
                    <p>{IsEatable(edible)}</p>
                </div>
            </div>
        </>
    );
}
