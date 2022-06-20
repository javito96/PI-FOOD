import React from "react";
// import s from './Cards.module.css';
import { Link } from 'react-router-dom';

export default function Cards({ id, image, title, diets }) {

    return (
        <div>
            <div >
                <div>
                    <h4>{title}</h4>
                    <img src={image} alt="img not found" />
                    <p>Diets type: {diets.join(', ')}</p>
                    <Link to={`/home/${id}`}>
                        <h4>See more</h4>
                    </Link>
                </div>
            </div>
            </div>
    )
}