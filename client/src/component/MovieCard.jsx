import React from 'react'
import "./Card.css"
import { useState } from 'react';
import { FaPlay, FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ id, Title, Poster, Year, Desc }) => {

    const [hover, setHover] = useState(false);
    const handleEnter = () => {
        setHover(true);
    }
    const handleLeave = () => {
        setHover(false);
    }
    const navigate = useNavigate();
    return (
        <div className="card-main">
            <div className="subcard_cantainer" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <div className="card-img">
                    <img src={Poster} alt="Poster" />
                </div>
                <div className={hover ? "card-secondary" : "card-secondary none"}>
                    <div className={hover ? "card-details glassMorphism " : "card-details"}>

                        <div className="card-title">{Title} </div>
                        <div className="card-para">Released On: {Year.split('-')[0]}</div>
                        <div className="card-para">{Desc}</div>
                        <div className="card-play" ><span><FaPlay /></span><span >WATCH MOVIE</span></div>
                        <div className="card-playlist"><span><FaPlus /></span><span>ADD TO PLAYLIST</span></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard