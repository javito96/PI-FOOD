import React from "react";
// import s from './Cards.module.css';
// import { Link } from 'react-router-dom';

export default function Cards({ title, image, diets, id }) {
    return (
      <div className="Card">
        <h3>{title}</h3>
        <img src={image} alt="img not found" width="200px" heigth="250px" />
        <p>Diets type: {diets.join(', ')}</p>        
        <Link to={`/detail/`+ id}>
          <button id='Detail'>Detail</button>
        </Link>
     </div>
    );
  }