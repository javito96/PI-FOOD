import React, { Fragment } from 'react';
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
    },[dispatch])

    //*FUNCIONES

    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
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

            <div>
            
            <select>
          <option value=''>Filter Alphabetically</option>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
        <select>
          <option value=''>Filter Score</option>
          <option value='asc'>Max-Min</option>
          <option value='des'>Min-Max</option>
        </select> 

        {
           allRecipes?.map((c) => {
            return(
                <Fragment>
                    <Link to={'/home' + c.id}>
                        <Cards title={c.title} diets={c.diets} image={c.img} />
                    </Link>
                </Fragment>
            )
           })
        }     
         
        
            </div>          
        </div>
    )
}