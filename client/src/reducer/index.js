
    const initialState = {
        recipes : [],
        allRecipes : [],
        diets: [],
    }
    function rootReducer(state = initialState, action){
        switch(action.type) {
            case 'GET_RECIPES':
                return {
                    ...state,
                    recipes: action.payload,
                    allRecipes: action.payload //*recarga la pagina una vez que se aplica el filtrado y queres buscar otra
                }


                case 'GET_RECIPES_NAME'   :
                 return{
                    ...state,
                    recipes: action.payload,
                    // cargando:false
                 } 
                 case "GET_DIETS" : 
                 return {
                     ...state,
                     diets : action.payload
                 } 

            case 'POST_RECIPES':
                return {
                    ...state,
                }
                 
                 

            case 'FILTER_BY_TYPES':
                   
                        const allRecipes= state.allRecipes
                        const typesFiltered = action.payload === 'All' ? allRecipes : 
                        allRecipes.filter(el=>el.diets.includes(action.payload) || 
                        el.diets.map((el) => el.title).includes(action.payload))

                        return {
                            ...state,
                            recipes: typesFiltered,
                        }


            case 'ORDER_BY_NAME' :
                const sortArr = action.payload === 'asc' ?
                state.recipes.sort(function (a, b){
                    if(a.title > b.title) {
                        return 1;
                    }
                    if (b.title > a.title){
                        return -1;
                    }    
                    return 0;                
                }) :
                state.recipes.sort(function(a, b) {  //de forma descendente
                    if(a.title > b.title) {
                        return -1;
                    }
                    if (b.title > a.title){
                        return 1
                    }
                    return 0;
                })
                return{
                    ...state,
                    recipes: sortArr
                }


            case 'ORDER_BY_SCORE':
                const sortArrayScore = action.payload === 'asc' ?
                state.recipes.sort(function(a, b){
                if(a.healtScore > b.healtScore) {
                        return 1;
                    }if (b.healthScore > a.healthScore){
                        return -1;
                    }    
                    return 0;                
                }) :
                state.recipes.sort(function(a, b) {
                    if(a.healthScore > b.healthScore) {
                        return -1;
                    }
                    if (b.healthScore > a.healthScore){
                        return 1
                    }
                    return 0;
                });
                return{
                    ...state,
                    recipes: sortArrayScore,
                };
                   
                   
                default:
                    return state;
        }
    }


export default rootReducer;