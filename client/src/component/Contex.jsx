import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
const AppContex = React.createContext();


const baseUrl = "https://api.themoviedb.org/3/";
const apiUrl = "?api_key=b58a59b98c1e88f6abd54fcfedd78838&page=1";
const PopularMoviesUrl = "/movie/popular";
const LatestMovieUrl = "/movie/top_rated";
const nowPlayingUrl = "/movie/upcoming";
const TrendingTodayUrl = "/trending/movie/day"
const UpcomingUrl = "/movie/upcoming";
const GenreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=b58a59b98c1e88f6abd54fcfedd78838"
const url = `${baseUrl}${TrendingTodayUrl}${apiUrl}`;

console.log(url);
const AppProvider = ({ children }) => {
    const [isLoading, setisLoading] = useState(true);
    const [upComingMovies, setUpComingMovies] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [Genre, setGenre] = useState([]);

    const getGenre = async (GenreUrl) => {
        const data = fetch(GenreUrl).then(data => data.json());
        setGenre(data);
    }
    const getMoviesPopular = async (uri) => {
        const url = `${baseUrl}${uri}${apiUrl}`;
        try {
            const popular = await fetch(url);
            const popularData = await popular.json();

            if (popularData.page > 0) {
                setPopularMovies(popularData.results);

            } else {

            }
        } catch (error) {

            console.log("Error ocuurred!")

        }
    }

    const getMoviesLatest = async (uri) => {
        const url = `${baseUrl}${uri}${apiUrl}`;

        try {
            const latest = await fetch(url);
            const latestData = await latest.json();

            if (latestData.page > 0) {

                setLatestMovies(latestData.results);

            }
        } catch (error) {

            <Navigate to={<PageNotFound />} />

        }
    }

    const getMoviesNowPlaying = async (uri) => {
        const url = `${baseUrl}${uri}${apiUrl}`;

        try {
            const nowPlaying = await fetch(url);
            const nowPlayingData = await nowPlaying.json();

            if (nowPlayingData.page > 0) {

                setNowPlayingMovies(nowPlayingData.results);

            } else {

            }
        } catch (error) {

            console.log("Error ocuurred!")

        }
    }

    const getMoviesUpcoming = async (uri) => {
        const url = `${baseUrl}${uri}${apiUrl}`;

        try {
            const Upcoming = await fetch(url);
            const UpcomingData = await Upcoming.json();
            if (UpcomingData.page > 0) setUpComingMovies(UpcomingData.results)
            setisLoading(false);
        } catch (error) {

            console.log("Error ocuurred!")

        }
    }


    const truncateDesc = (desc, len = 85) => {
        let p = desc.substr(0, len);
        p = p + '...';
        return p;

    }

    useEffect(() => {

        console.log(`${baseUrl}${LatestMovieUrl}${apiUrl}`);
        setisLoading(true);
        getGenre(GenreUrl)
        getMoviesPopular(PopularMoviesUrl);
        getMoviesLatest(LatestMovieUrl);
        getMoviesNowPlaying(nowPlayingUrl);
        getMoviesUpcoming(UpcomingUrl);

        setisLoading(false);
    }, [])


    return <AppContex.Provider value={{ Genre, upComingMovies, popularMovies, latestMovies, nowPlayingMovies, isLoading, truncateDesc }}>{children}</AppContex.Provider>
}
const useGlobalContex = () => {
    return useContext(AppContex);
}
export { useGlobalContex, AppProvider };