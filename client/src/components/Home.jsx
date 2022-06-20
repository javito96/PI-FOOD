import React from 'react';
import {  useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes } from '../actions';
import {Link} from 'react-router-dom'
import Cards from './Card'



export default function Home (){

    const dispatch = useDispatch()
    const allRecipes = useSelector ((state) => state.recipes)

    useEffect (()=> {
        dispatch(getRecipes())//me trae las recetas
    },[dispatch, pages, order, filtro])

    //*FUNCIONES

    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes(pages, order, filtro));
    }
    // function handleSort (e) {
    //     e.preventDefault()
    //     dispatch(orderByName(e.target.value))
    //     setCurrentPage(1)
    //     setOrder(`${e.target.value}`)
    //   }
         

    return (
        <div>
            <Link to='/recipes'>Create recipe</Link>
            <h1>Recipes</h1>
            <button onClick={e => {handleClick(e)}}>
                volver a cargar todas las recetas
            </button>

            //FILTROS
            <div>
            
        
            </div>          
        </div>
    )
}