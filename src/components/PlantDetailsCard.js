import React from "react";
import './Styles/PlantDetailsCard.css';

export default function PlantDetailsCard(props) {
    console.log("detailscardprops:", props)
    return(
        <>
            <div className="plant-card-details-container" >
                 <p>plant{props?.id}</p>
                <h3>details card</h3>
            </div>
        </>
    );
}
