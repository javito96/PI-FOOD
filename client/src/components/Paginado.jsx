import React from 'react';
import './Paginado.css'

export default function Paginado({recipesPerPage, allRecipes, paginado}){
    const pageNumber = []


    for (let i=0; i<=Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumber.push(i+1)
    }//tomo el nro redondo(metodo ceil) de dividir los personajes en las paginas 


    return(
        <nav>
            <div className='paginado'>

            <ul className='paginadoContainer'>
                {pageNumber && 
                pageNumber.map(number=>(
                    <li className='li' key={number}>
                        <a>

                    <button className='button' id='button' onClick={() =>paginado(number)}>{number}</button>
                </a>
                    </li>
                ))}
            </ul>
                </div>
        </nav>
    )
}