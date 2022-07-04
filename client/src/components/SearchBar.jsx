import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../actions";
import './SearchBar.css'


export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleInputRecipes(e) {
    e.preventDefault();
    setTitle(e.target.value);
    console.log(title)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipesName(title));
  }

  return (
  
  
      <div className="div" >
        
   <input
   type='text'
   placeholder= 'Search...'
   onChange={(e) => handleInputRecipes(e)}   
   />
  
   <button className="button" id="button" type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
   </div>
 
  );
}