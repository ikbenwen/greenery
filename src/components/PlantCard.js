import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Styles/PlantCard.css'

const defaultImg = 'https://i.pinimg.com/600x315/0a/c6/6f/0ac66fe759b624f053efa5f5bc2b78f1.jpg'

const token = "BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc";


export default function PlantCard(props) {
    // console.log('PlantCard props:', props)

    const [plant, setPlant] = useState(null);

    useEffect(() => {
        async function getPlantData() {
            try {
                const {data,} = await axios.get(
                    `https://trefle.io/api/v1/species/${props.id}?token=${token}`
                )
                setPlant(data.data)
                // console.log("data na get",data.data)
            } catch (e) {
                console.log(e)
            }
        }

        getPlantData();
    },['']);

    // console.log("plant is", plant?.common_name);
    // ${props.name}
    return(
        <>
            <div className="plant-card-container" >
                <img src={plant?.image_url} alt={plant?.common_name}/>
                <div className="plant-card-details-container">
                <h4>{plant?.common_name}️</h4>
                <p>{plant?.scientific_name}</p>
                <p>{plant?.family_common_name}</p>
                </div>
            </div>
        </>
    )
}
