import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { postRecipes, getDiets } from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import './RecipeCreate.css'

function validate(input) {
    let errors = {};
    if (!input.title) {
      errors.title = "Title is Required";
    } else if (!input.summary) {
      errors.summary = "Summary is Required";
    } else if (!input.image) {
      errors.image = "Image is Required";
    } else if (!input.healthScore) {
      errors.healthScore = "Health Score Number is Required";
    } else if (!input.spoonacularScore) {
      errors.spoonacularScore = "Spoonacular Score is Required";
    } else if (!input.steps) {
      errors.steps = "Steps is Required";
    }
    return errors;
  }


export default function RecipeCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const diets = useSelector((state) => state.diets);
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        title: "",
        summary: "",
        image: "",
        healthScore: "",
        spoonacularScore: "",
        steps: "",
        diets: [],
    });

    

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }
    function handleSelect(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
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

    function handleDelete(el){
    setInput({
        ...input,
        diets: input.diets.filter(di => di !== el)
    })
    }


    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch]);

    return (
        <div className="fondo">
            <div className="container" >
                <div>
                <button><Link className="button" id="button" to='/home'>Back home</Link></button>
                </div>
                
                <div>
                    
            <h1 className="title">Create your recipe</h1>

                </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Title</label>
                    <input
                        type='text'
                        value={input.title}
                        name='title'
                        onChange={(e) => handleChange(e)}
                        />
                        {errors.title && <p>{errors.title}</p>}
                </div>

                <div>
                    <label>Summary</label>
                    <input
                        type='text'
                        value={input.summary}
                        name='summary'
                        onChange={(e) => handleChange(e)}
                        />
                         {errors.summary && <p>{errors.summary}</p>}
                </div>

                <div>
                    <label>Image</label>
                    <input
                        type='text'
                        value={input.image}
                        name='image'
                        onChange={(e) => handleChange(e)}
                        />
                         {errors.image && <p>{errors.image}</p>}
                </div>

                <div>
                    <label>Score</label>
                    <input
                        type='range'
                        value={input.healthScore}
                        name='healthScore'
                        min="0"
                        max="100"
                        onChange={(e) => handleChange(e)}
                        />
                        {errors.healthScore && <p>{errors.healthScore}</p>}
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
                        {errors.spoonacularScore && <p>{errors.spoonacularScore}</p>}
                </div>

                <div>
                    <label>Steps</label>
                    <input
                        type='text'
                        value={input.steps}
                        name='steps'
                        onChange={(e) => handleChange(e)}
                        />
                         {errors.steps && <p>{errors.steps}</p>}
                </div>




                    
                              
                <select onChange={(e) => handleSelect(e)}>
                    {diets.map((diet, i) => (
                        <option key={i} value={diet.title}>{diet.title}</option>
                        ))}
                </select>
                <ul><li>{input.diets.map(el => el + ', ')} </li></ul>
            {input.diets.map(el=>
            <div>
                <p>{el}</p>
                <button className="button" id="button" onClick={() => handleDelete(el)}> x </button>
            </div>              
                        
                        )}
                      


            <button className="button" id="button" type="submit" >Create recipe</button>



            
            </form>
            
            </div>
        </div>
    )


}