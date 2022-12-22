import React, { useState } from 'react'
import { useEffect } from 'react';
import { useGlobalContex } from './Contex';
import "./Slider.css"
import SliderNavigation from './SliderNavigation';
const Slider = () => {
    const BackDropLink = "https://image.tmdb.org/t/p/w780";
    const { upComingMovies } = useGlobalContex();
    const [isLoading, setisLoading] = useState(true);
    const [data, setData] = useState([]);
    const [movie, setMovie] = useState();

    useEffect(() => {
        if (upComingMovies.length > 0) {
            let ind = Math.floor(Math.random() * upComingMovies.length);
            setMovie(upComingMovies[ind]);
            console.log(upComingMovies);
            setisLoading(false);
            setData(upComingMovies);
        }

    }, [upComingMovies])


    return (

        <>

            <div className="container">

                {!isLoading &&
                    <div className="left">
                        <div className="movie-details">
                            <div className="movie-suscriber">
                                <h3>SUBSCRIBER</h3>
                            </div>
                            <div className="movie-title">
                                <h4>{movie.title}</h4>
                            </div>
                            <div className="movie-middle">
                                <span>{movie.genres ? movie.genres.map((genre) => {
                                    return <span className='genre'>{genre ? genre.name + ' - ' : "Loading..."}</span>
                                }) : ""}
                                    <span className='genre'>{movie.release_date?.split('-')[0]}</span>
                                </span>

                            </div>
                            <div className="movie_decription">
                                <p>
                                    {movie.overview}
                                </p>
                            </div>

                        </div>
                        <div className="middle"></div>
                    </div>
                }

                <div className="right">


                    {!isLoading &&
                        <img src={`${BackDropLink}${movie.backdrop_path}`} alt="movie_photo" />
                    }

                </div>
            </div>

        </>
    )
}

export default Slider