import React, { useState, useEffect } from 'react';
import axios from "axios";

const defaultImg = 'https://i.pinimg.com/600x315/0a/c6/6f/0ac66fe759b624f053efa5f5bc2b78f1.jpg'

const token = "BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc";


export default function PlantCard(props) {
    {
        const {props} = plant;
    }
    const [plant, setPlant] = useState(null);
    console.log('PlantCard props:', props)

    useEffect(() => {
        async function getPlantData() {
            try {
                const data = await axios.get(
                    `https://trefle.io/api/v1/species/${props.name}?token=${token}`
                )
                setPlant({data})
                console.log("data na get",data)
            } catch (e) {
                console.log(e)
            }
        }

        getPlantData();
    },[props.name]);

    // console.log("plant is", plant.common_name);

    return(
        <>
            <div className="plant-card-container" >
                <img src={defaultImg} alt={plant?.common_name}/>
                <div className="plant-card-details-container">
                <h4>☘️{plant && plant?.id}☘️</h4>
                <p>scientific name: {plant?.scientific}</p>
                <p>family name : {plant?.family_name}</p>
                </div>
            </div>
        </>
    )
}
