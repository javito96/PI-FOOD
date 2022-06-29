import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { postRecipes, getDiets } from '../actions/index'
import { useDispatch, useSelector } from "react-redux";


function validate(input) {
    let errors = {};
    if (!input.title) {
        errors.title = 'Name is required';
    } else if (!input.summary) {
        errors.summary = 'Write a summary'
    }
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
        <div>
            <Link to='/home'><button>Back home</button></Link>
            <h1>Create your recipe</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Title</label>
                    <input
                        type='text'
                        value={input.title}
                        name='title'
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Summary</label>
                    <input
                        type='text'
                        value={input.summary}
                        name='summary'
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Image</label>
                    <input
                        type='text'
                        value={input.image}
                        name='image'
                        onChange={(e) => handleChange(e)}
                    />
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
                        name='steps'
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <select onChange={(e) => handleSelect(e)}>
                    {diets.map((diet, i) => (
                        <option key={i} value={diet.title}>{diet.title}</option>
                    ))}
                </select>
                {/* <ul><li>{input.diets.map(el => el + ', ')} </li></ul>
                <button type="submit" >Create recipe</button> */}

            {input.diets.map(el=>
            <div>
                <p>{el}</p>
                <button  onClick={() => handleDelete(el)}> x </button>
            </div>
            )}
            </form>
            
        </div>
    )


}