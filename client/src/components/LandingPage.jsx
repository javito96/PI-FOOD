import React from 'react'
import {Link} from 'react-router-dom'


export default function LandingPage(){
    return (
        <div>
            <h1>WELCOME</h1>
            <Link to = '/home'>
                <button>GET INTO</button>
            </Link>
        </div>
    )
}