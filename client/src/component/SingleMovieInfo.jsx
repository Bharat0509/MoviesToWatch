import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './singlemovie.css'
import { BsPlusLg, BsShareFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import Loading from './Loading';
import { NavLink } from 'react-router-dom';
import MovieCard from './MovieCard';
import { useGlobalContex } from './Contex';
import { useNavigate } from 'react-router-dom';
import CardNavigation from './CardNavigation';


const SingleMovieInfo = () => {
  let id = window.location.pathname.split('/');
  const [movie_id, setmovie_id] = useState(id[id.length - 1])
  const navigate = useNavigate();
  const PosterLink = "https://image.tmdb.org/t/p/w300/";
  const BackDropLink = "https://image.tmdb.org/t/p/w780";

  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [RecommendedMovie, setRecommendedMovie] = useState();
  const [similarMovie, setSimilarMovie] = useState();
  const { truncateDesc } = useGlobalContex();
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b58a59b98c1e88f6abd54fcfedd78838&page=1&language=en-US`;
  const RecommendedMovieurl = `https://api.themoviedb.org/3//movie/${movie_id}/recommendations?api_key=b58a59b98c1e88f6abd54fcfedd78838&page=1&language=en-US`;
  const similarMovieurl = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=b58a59b98c1e88f6abd54fcfedd78838&page=1&language=en-US`;
  const fetche = async (url, RecommendedMovieurl, similarMovieurl) => {
    setisLoading(true);
    const data = await fetch(url).then(data => data.json());
    const recommendations = await fetch(RecommendedMovieurl).then(res => res.json());
    const similar = await fetch(similarMovieurl).then(res => res.json().then(setisLoading(false)));
    setRecommendedMovie(recommendations.results);
    setSimilarMovie(similar.results);

    setMovie(data);

  }
  useEffect(() => {
    console.log("Id changed ", movie_id);
    fetche(url, RecommendedMovieurl, similarMovieurl);
  }, [movie_id, RecommendedMovieurl])


  return (
    <>{
      isLoading && <Loading />
    }
      {!isLoading && <div className="singleMovie">

        <div className="container">
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

          <div className="right">



            <img src={`${BackDropLink}${movie.backdrop_path}`} alt="movie_photo" />


          </div>
          <div className="banner-footer">
            <div className="left">
              <span className="icons" onClick={() => navigate(`/movie/watch/${movie_id}`)}> <FaPlay /></span>

              <span onClick={() => navigate(`/movie/watch/${movie_id}`)}>  Watch Movie</span>
            </div>
            <div className="right">
              <div className="items">
                <span className="icons"><BsPlusLg /></span>

                <span className='icons-name'>WATCHLIST</span>

              </div>
              <div className="items">
                <span className="icons"> <BsShareFill /></span>

                <span className='icons-name'>SHARE</span>

              </div>
            </div>
          </div>

        </div>


        <div className="movies-container">
          {RecommendedMovie && <CardNavigation headLine={"Recommended For You"} Movies={RecommendedMovie} setmovie_id={setmovie_id} />}
        </div>

        <div className="movies-container">
          {RecommendedMovie && <CardNavigation headLine={"Similar Movies"} Movies={similarMovie} setmovie_id={setmovie_id} />}
        </div>
        c
      </div>
      }
    </>
  )
}

export default SingleMovieInfo;