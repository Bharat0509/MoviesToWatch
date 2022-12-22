import "./Card.css"
import { useGlobalContex } from "./Contex"
import CardNavigation from "./CardNavigation"

const Card = () => {

  const { popularMovies, latestMovies, nowPlayingMovies } = useGlobalContex();


  return (

    <div className="cards__container">
      <CardNavigation headLine={"Trending Today"} Movies={popularMovies} />

      <CardNavigation headLine={"Now Playing"} Movies={nowPlayingMovies} />

      <CardNavigation headLine={"Latest Movies"} Movies={latestMovies} />
    </div>
  )
}

export default Card