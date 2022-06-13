import React from 'react';
import {  useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes } from '../actions';
import {Link} from 'react-router-dom'
import Card from './Card';

export default function Home (){
    const dispatch =useDispatch()
    const allRecipes = useSelector ((state) => state.recipes)

    useEffect (() => {
        dispatch(getRecipes());
    },[dispatch])//breack


    function handleClick(e){
        e.preventDefault();//recetea y manda todo de nuevo
        dispatch(getRecipes())
    }

return (
    <div>
        <Link to= '/recipe'>Create recipe</Link>
        <h1>Recipes</h1>
        <button>
            Reload all recipes
        </button>
        <div>            
        <select onChange={e => handleSort(e)} className='homeButton'>
       
        </select>
        {
          allRecipes?.map( e => {
            <Card name={e.name} image={e.img} />
          })
        }

        </div>
    </div>
)
}
