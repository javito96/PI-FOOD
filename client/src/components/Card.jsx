import React from "react";
import './Card.css'

import { Link } from 'react-router-dom';

export default function Cards({ title, image, diets, id }) {
    return (
      <div className="Card">
        <h3>{title}</h3>
        <img className="imgCard" src={image} alt="img not found" width="200px" heigth="250px" />
        <h5>Diets type: {diets.join(', ')}</h5>    
        <nav>
        <Link to={`/detail/${id}`}>
                        <button className="detail" >See more</button>
       </Link>
          </nav>    
     </div>
    );
  }