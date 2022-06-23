import React from 'react';

export default function Paginado({recipesPerPage, allRecipes, paginado}){
    const pageNumber = []


    for (let i=0; i<=Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumber.push(i+1)
    }//tomo el nro redondo(metodo ceil) de dividir los personajes en las paginas 


    return(
        <nav>
            <ul className='paginado'>
                {pageNumber && 
                pageNumber.map(number=>(
                    <li className='number' key={number}>
                    <button onClick={() =>paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}