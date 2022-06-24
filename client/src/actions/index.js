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
// export function getNameRecipes(title){
//     return async function (dispatch){
//         try{
//             let response = await axios.get(`http://localhost:3001/recipes?title=${title}`)
//             return dispatch({
//                 type: 'GET_NAME_RECIPES',
//                 payload: response.data
//             })
//         }catch(error) {
//             console.log(error);
//         }
//     }
// }

export function filterRecipesByType(payload){
    return {
        type: 'FILTER_BY_TYPES',
        payload
    }
}//* en action tratar siempre de tener la menor cantindad de logica posible

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload,
    }
}

export function orderByScore(payload) {
    return{
        type: 'ORDER_BY_SCORE',
        payload
    }
}
