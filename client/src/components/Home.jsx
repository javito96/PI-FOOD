import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes, filterRecipesByType, orderByName, orderByScore } from '../actions';
import {Link} from 'react-router-dom'
import Cards from './Card'
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import './Home.css'
import Loading from './Loading.jsx'



export default function Home (){

    const dispatch = useDispatch()
    const allRecipes = useSelector ((state) => state.recipes)
    const [currentPage, setCurrentPage ] = useState(1)//estado local con primer pag que renderiza
    const [recipesPerPage] = useState(9)//en la primer pag trae 9 recetas
    const indexOfLastRecipes = currentPage * recipesPerPage//numero del ultimo indice multiplicado pag, ej recetas 9 pag nro3 = 27
    const indexOfFirstRecipe = indexOfLastRecipes - recipesPerPage//indice de ultima receta - recetas por pag igual a indice de primer receta
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipes) //slice toma una porcion de lo que yo le paso por parametro
    const [Ordenado, setOrder] = useState('')
  

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }//ayuda al renderizado

    useEffect(()=> {
        dispatch(getRecipes())//me trae las recetas
    },[dispatch])

    //*FUNCIONES

    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }
    function handleFilterTypes(e){
        dispatch(filterRecipesByType(e.target.value))//target value es el paylou
        setCurrentPage(1)
      }
    function handleSort (e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
      }
      function handleByScore(e){
        e.preventDefault()
        dispatch(orderByScore(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
      }


         

    return (
      <div className='back'>
            <h1 className='title' >
                FOOD<span>RECIPES</span>
              </h1>
              
           
        <div className='filterContainer' >         
            <nav>
                      <Link to='/recipes' className='button' id='button' >Create recipe</Link>
            </nav>

               <div> <SearchBar/></div>
             
              </div>
            <button className='button' id='button' onClick={e => {handleClick(e)}}>
                volver a cargar todas las recetas
            </button>
        
            <div>            
        <h1 className='backDescripcion'>FILTRAR</h1>
              <div className='filterContainer' >
            <select                         
             onChange={e=> handleSort(e)}>
          <option value=''>FILTER ALPHABETUCALLY</option>  
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>
               


        <select 
        onChange={e=> handleByScore(e)}>
          <option value=''>FILTER BY SCORE</option>
          <option value='asc'>Max-Min</option>
          <option value='desc'>Min-Max</option>
        </select> 
             


        <select onChange={e => handleFilterTypes(e)} >
          <option value=''>FILTER BY DIETS</option>
          <option value='All'>All</option>
          <option value='gluten free'>Gluten Free</option>
          <option value='dairy free'>Dairy Free</option>
          <option value='vegan'>Vegan</option>
          <option value='lacto ovo vegetarian'>Lacto-Ovo Vegetarian</option>
          <option value='pescatarian'>Pescatarian</option>
          <option value='paleolithic'>Paleolithic</option>
          <option value='primal'>Primal</option>
          <option value='fodmap friendly'>Low FODMAP</option>
          <option value='whole 30'>Whole30</option>
          <option value='vegetarian'>Vegeterian</option>
          <option value='ketogenic'>Ketogenic</option>
        </select>
        <div>
          
        </div>
              </div>
        

                  
              

        </div>        
       ( <div className='cards' >

        {
          currentRecipes?.map((c) => {
            return(
              <div
              key={c.id}>
                    <Fragment>
                        <Link to={'/home' + c.id}>
                        <Cards 
                        id={c.id} 
                        key={c.id} 
                        title={c.title}
                        image={c.image} 
                        diets={c.diets.length > 0? (c.diets.map(e=>e.name ? e.name : e)) : ['Diets not found']}/>
                        </Link>
                    </Fragment>
                </div>
            ) 
          } )
        }           
        </div> ):
        (<Loading/>)
        <div>
        <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        paginado={paginado}
        />
        </div>
        </div>
      
    )
}