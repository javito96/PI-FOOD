import React from 'react'
import {Link} from 'react-router-dom'
import "./LandingPage.css";


export default function LandingPage(){
    return (
        <div className='LandingPage' >
            <div>

            <Link to = '/home'>
                <button className='button' id='button'>GET INTO</button>
            </Link>
            </div>
            <div>
            <h1 className='letras' >WELCOME </h1>
            </div>
            <div className='descripcion'>
            <h2>
              
              Don't know what to cook for your meal today?
               This page helps you search
                for more than 100 recipes,
                 choose according to the 
                 highest score and save 
                 your recipes.
              
            </h2>
            </div>
            
            
        </div>
    )
}