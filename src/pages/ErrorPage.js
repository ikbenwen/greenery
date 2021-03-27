import React from 'react';
import {Route} from "react-router-dom";
import sadPlant from "../assets/sad-plant.png";

const errorImage = sadPlant;

export default function ErrorPage(){

    return (
        <div className="page-not-found-container">
            <h2>404 Page Not Found</h2>
            <h3>You are in the wrong place!</h3>
            <img src={errorImage} alt="sadPlant"/>
        </div>
    )
}
