
import useSWR, { Fetcher } from 'swr'
import ErrorPage from '../pages/ErrorPage';

const movieSwrFetcher = async (url:string) => {
    const res = await fetch(url);
    //fetch(url).then(r => r.json())
    console.log("Prueba Fetch");
    
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error:any = new Error('An error occurred while fetching the data.');
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }

    return res.json();
     
}


//const movieSwrFetcher = (url:any) => fetch(url).then(r => r.json())

export default function MovieDetails({ movieId }: any) {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDBAPIKEY}`
    console.log(url);
    const { data, error } = useSWR(url, movieSwrFetcher, { suspense: true })
    
    if (error) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred while getting the movie.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        )
    } 

    // Else, render data...
    return (
    <>
        
        {/* Hero to Show Case the Movie's Title */}
        <div className="hero max-h-[400px] h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            </div>
        </div>

        {/* Main Section */}
        <div className="movie-details">
            <h3>{data.title}</h3>
            <p>{data.overview}</p>
            <p>Fecha de lanzamiento: {data.release_date}</p>
            <p>Puntuación: {data.vote_average}</p>
            <p>Duración: {data.runtime} minutos</p>
            {/* Agrega más detalles aquí según tus necesidades */}
        </div>

    </>
    );
}



