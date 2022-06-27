import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {postRecipes, getDiets} from '../actions/index'
import { useDispatch, useSelector } from "react-redux";



export default function RecipeCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const diets = useSelector((state) => state.diets);
    // const [errors, setErrors] = useState({});

const [input, setInput] = useState({
          title: "",
          summary: "",
          image: "",
          healthScore: "",
          spoonacularScore: "",
          steps: "",
          diets: [],
})//aca guarda el formulario

function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}
function handleSelect(e){
    setInput({
        ...input,
        diet: [...input.diets,e.target.value]
    })
}

 function handleSubmit(e) {
   e.preventDefault();
   console.log(input)
   dispatch(postRecipes(input));
   alert("Recipe created successfully!");
   setInput({
     title: "",
     summary: "",
     image: "",
     healthScore: "",
     spoonacularScore: "",
     steps: "",
     diets: [],
   });
   history.push("/home");
 }


useEffect(() => {
    dispatch(getDiets())
},[dispatch]);

return (
    <div>
        <Link to='/home'><button>Back home</button></Link>
        <h1>Create your recipe</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Title</label>
                <input
                type='text'
                value= {input.title}
                name= 'title'
                onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <label>Summary</label>
                <input
                type='text'
                value={input.summary}
                name= 'summary'
                onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <label>Image</label>
                <input
                type='text'
                value={input.image}
                name= 'image'
                onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <label>Score</label>
                <input
                type='range' 
                value={input.healthScore}
                name= 'healthScore'
                min="0"
                max="100"
                onChange={(e) => handleChange(e)}
                />
            </div>
            
            <div>
            <label>Spoonacular Score:</label>
            <input
              type="range"
              value={input.spoonacularScore}
              name="spoonacularScore"
              min="0"
              max="100"
              onChange={(e) => handleChange(e)}
            />
           
          </div>

            <div>
                <label>Steps</label>
                <input
                type='text'
                value={input.steps}
                name= 'steps'
                onChange={(e) => handleChange(e)}
                />
            </div>
            
            <select onChange={(e) => handleSelect(e)}>
                {diets.map((diet) =>(
                    <option value={diet.title}>{diet.title}</option>
                ))}
            </select>

            <button type="submit" >Create recipe</button>

            
        </form>
    </div>
)


}