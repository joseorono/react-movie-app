import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  

function AppHeader() {
    const navigate = useNavigate();
    const [randomMovieId, setrandomMovieId] = useState( getRandomInt(1, 1000) );

    const handleRandomMovie = () => {
        let randomId = getRandomInt(1, 1000);
        navigate("/movie/" + randomId);
    }

    useEffect(() => {
        console.log("AppHeader mounted");

        return () => {
            console.log("AppHeader unmounted");
        };
    }, []);
    
  return (
    <div className="navbar bg-primary">
        <div className="flex-1">
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">CinemaRed</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><NavLink  to={"/"}>Inicio</NavLink></li>
            <li>
                <a onClick={handleRandomMovie} style={{cursor: 'pointer'}}>Random Movie</a>
            </li>
            
            </ul>
        </div>
    </div>
  );
}

export default AppHeader;
