import axios from 'axios';



export function getRecipes(){
    return async function(dispatch){
        var json = await axios ('http://localhost:3001/recipe');
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}//!toda la conexion del back con el front

export function filterRecipesByType(payload){
    return {
        type: 'FILTER-BY-TYPES',
        payload
    }
}//* en action tratar siempre de tener la menor cantindad de logica posible