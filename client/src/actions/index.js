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


export function getRecipesName(title) {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/recipe?title=' + title);
        return dispatch({
            type: 'GET_RECIPES_NAME',
            payload: json.data
        })
    }
};

export function getDiets() {
    return async function (dispatch) {
        const info = await axios("http://localhost:3001/types", {

        })
        return dispatch({type: 'GET_DIETS', payload: info.data})
    }
}

export function postRecipes(payload){
    return async function () {
        const response = await axios.post('http://localhost:3001/recipe', payload)
        console.log(response)
        return response;
    }
}

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

export function getDetail(id){
    return async function(dispatch){
        try{
            var json= await axios.get('http://localhost:3001/recipe/' + id);
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }

}


