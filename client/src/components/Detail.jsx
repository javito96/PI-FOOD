import React from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import {getDetail} from '../actions/index';
import { useEffect } from "react";
import Loading from "../components/Loading";

export default function Detail(props){
  console.log(props)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
  },[dispatch])

  const myRecipe = useSelector((state) => state.detail)

 
  

  return (
    <div>
        {Object.keys(myRecipe).length > 0 ? (
            <div>
                <div >
                    <Link to="/home">
                        <button >⬅ TO BACK HOME</button>
                    </Link>
                </div>
                <div >
                    <h2>{myRecipe.title}</h2>
                </div>
                <div >
                    <div  >
                        <img  src={myRecipe.image} alt="img not found" />:
                    </div>
                    <div >
                        <div >
                            <h3>Score: {myRecipe.spoonacularScore ? myRecipe.spoonacularScore : 'score not found'}</h3>
                        </div>
                        <div>
                            <h3>Health Score: {myRecipe.healthScore ? myRecipe.healthScore : 'health score not found'}</h3>
                        </div>
                        <div>
                            <h3>Diets: </h3>
                            <p>{myRecipe.diets.length > 0 ? (myRecipe.diets.map(e => e.name ? e.name + '/ ' : e + '/ ')) : 'diets not found'}</p>
                        </div>
                        <div>
                            <h3>Dish types:</h3>
                            <div>
                                <p>{myRecipe.dishTypes ? myRecipe.dishTypes.map(e => e + '/ ') : 'dishTypes not found'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Summary: </h3>
                        <p></p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Instructions:</h3>
                        <p>{myRecipe.analyzedInstructions.length !== 0 ?
                            (typeof myRecipe.analyzedInstructions === 'string' ? myRecipe.analyzedInstructions : myRecipe.analyzedInstructions.map(e =>
                                e.map(e =>
                                    e.number && e.step ? 'STEP ' + e.number + ': ' + e.step : myRecipe.analyzedInstructions
                                ))) : 'Not found instruccions'}</p>
                    </div>
                </div>
            </div>
        ) : (
            <Loading />
        )
        }
    </div>
) 
}