import React, { useState } from 'react'
import './Card.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useGlobalContex } from './Contex';
import MovieCard from './MovieCard';
import { NavLink } from 'react-router-dom';



const CardNavigation = ({ headLine, Movies, setmovie_id }) => {
    const { truncateDesc } = useGlobalContex();
    const PosterLink = "https://image.tmdb.org/t/p/w500/";
    const [dist, setDist] = useState(0);

    const handleLeftTranslation = () => {

        setDist(dist > -200 ? dist - 100 : dist);
    }
    const handleRightTranslation = () => {
        setDist(dist < 0 ? dist + 100 : dist);

    }

    return (
        <>
            <div className="cards__heading">{headLine}</div>
            <div className="row-navigation-container">
                <div className="right-arrow">
                    {dist != 0 &&
                        <div className="arrow" onClick={handleRightTranslation}> <FaChevronLeft /></div>}
                </div>
                <div className="allMovieRow" style={{ transform: `translateX(${dist}%)` }}>
                    {
                        Movies.map((movie) => {

                            return <div key={movie.id}>
                                <NavLink className='white' onClick={() => setmovie_id(movie.id)} to={`/movies/info/${movie.id}`}> <MovieCard Title={movie.title} Poster={`${PosterLink}${movie.poster_path}`} Year={movie.release_date} Desc={truncateDesc(movie.overview, 75)} /></NavLink>


                            </div>
                        })
                    }
                </div>
                <div className="left-arrow">
                    {dist > -200 &&
                        <div className="arrow" onClick={handleLeftTranslation}> <FaChevronRight /></div>}
                </div>
            </div>
        </>

    )
}

export default CardNavigation