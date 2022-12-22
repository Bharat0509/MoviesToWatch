

import "./Slider.css"

const SliderNavigation = ({ headLine, movie, isLoading }) => {
    const BackDropLink = "https://image.tmdb.org/t/p/w780";
    return (

        <>
            <div className="container">

                <div className="left">
                    <div className="movie-details">
                        <div className="movie-suscriber">
                            <h3>{headLine}</h3>
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
                <div
                    className="right">


                    {!isLoading &&
                        <img src={`${BackDropLink}${movie.backdrop_path}`} alt="movie_photo" />
                    }

                </div>
            </div>

        </>
    )
}

export default SliderNavigation