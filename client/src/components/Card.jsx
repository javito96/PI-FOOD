import React from 'react';

export default function Card({title, image}) {
    return (
        <div>
            <h3>{title}</h3>
            <img srce={image} alt='img not found' width='200px' height='250px'/>
        </div>
    );
}