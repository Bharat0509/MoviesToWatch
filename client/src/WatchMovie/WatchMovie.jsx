import React, { useState } from 'react'
import { useEffect } from 'react'
import './watchMovie.css'

const WatchMovie = () => {

    const [MovieTrailer, setMovieTrailer] = useState()
    const [isLoading, setisLoading] = useState(false);
    const fetchData = (async () => {
        let movie_id = window.location.pathname.split('/')[3];
        let id = movie_id;
        const data = fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b58a59b98c1e88f6abd54fcfedd78838&page=1`).then(res => res.json()).then(res => res.results).then((res) => {
            console.log(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b58a59b98c1e88f6abd54fcfedd78838&page=1`);
            console.log(res);
            console.log(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b58a59b98c1e88f6abd54fcfedd78838&page=1`);
            setisLoading(false);
        });
        setMovieTrailer(data);

    })
    useEffect(() => {

        fetchData();
    }, [])
    return (<div className='container'>
        {
            isLoading && "lOADING"
        }
        {(!isLoading) &&
            <div>

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/XbTSLJ62YEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                <video src="https://www.youtube.com/watch?v=aATJpu37U6g" autoPlay></video>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque expedita ad quia consequatur iste rerum minima dolor, facere numquam similique nemo sit velit itaque quo amet et. Repellat facere vero veniam doloremque quasi qui similique vel! Doloremque repellendus quaerat accusantium at porro blanditiis est cumque adipisci veritatis odio fugit quo nesciunt molestias, exercitationem minus officia, sequi eligendi inventore, in vero reiciendis perspiciatis optio. Error cumque dolorum autem animi numquam commodi id inventore soluta velit. Ipsa et vel odio sint corrupti, illo atque, ipsum repellat facere dolores eos adipisci excepturi asperiores numquam itaque eaque magni ullam quidem optio voluptate id iusto minima. Voluptates, adipisci. Reiciendis, consequatur ullam? Dicta enim aliquid tempore nesciunt, provident porro, aspernatur atque vitae harum et saepe, obcaecati quis. Obcaecati aspernatur architecto dignissimos ipsum unde rem tenetur quis saepe aliquid explicabo deleniti voluptatibus, qui consequuntur deserunt dolorem. Nobis mollitia natus vitae autem numquam et minus necessitatibus, sed ea atque illum nihil ipsa officiis quam odio deleniti. Vitae enim delectus in similique blanditiis praesentium odio nulla sapiente molestias iste dicta fugit ipsum officia, doloremque quos saepe a tenetur recusandae perspiciatis veniam mollitia ipsa quia nam? Eaque aut repellendus, ex iste unde consequuntur minus, velit culpa libero sit maiores.</p>

            </div>
        }
    </div>
    )
}

export default WatchMovie