import axios from 'axios';



export function getRecipes(){
    return async function(dispatch){
        var json = await axios ('http://localhost:3001/recipe',{

        });
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}


//!toda la conexion del back con el front