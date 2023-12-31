
import useSWR from 'swr'

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
    let url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${import.meta.env.VITE_TMDBAPIKEY}&append_to_response=videos,images&include_video_language=en`
    console.log( "URL de pelicula a detallar: " + url);
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

    let backdrop_url = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
    // Else, render data...
    return (
    <>
        
        {/* Hero to Show Case the Movie's Title */}
        <div className="hero max-h-[400px] h-screen" style={{backgroundImage: backdrop_url}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-7xl font-bold capitalize">{data.title}</h1>
            </div>
            </div>
        </div>

        <main className='container md:mx-auto md:w-10/12 xl:w-9/12 py-4 px-4'>
            
            {/* Main Section */}
            <div className="movie-details">
                <h3>{data.title}</h3>
                <p>{data.overview}</p>
                <p>Release: {data.release_date}</p>
                <p>Score: {data.vote_average}/10</p>
                <p>Length: {data.runtime}min</p>
                {/* Agrega más detalles aquí según tus necesidades */}
            </div>

            {/* Movie Videos */}

            <div className="movie-videos">
                <h3>Trailer</h3>
                {
                    data.videos.results.filter( (video: any) => {
                        return video.type === "Trailer"
                    }).map(
                        (trailer: any, index: number) => {
                            let base_url = "";
                            if (trailer.site === "YouTube") {
                                base_url = "https://www.youtube.com/embed/";
                            } else if (trailer.site === "Vimeo") {
                                base_url = "https://player.vimeo.com/video/";
                            }
                            let trailer_url = `${base_url}${trailer.key}`;
                            return (
                                <div className='text-center mt-4 flex justify-center' key={"movieTrailer-"+index}>
                                    <iframe width="560" height="315" src={trailer_url} title={trailer.name} allowFullScreen></iframe>
                                </div>
                            )
                    })
                }
                
            </div>

            {/* Movie Images */}

        </main>

    </>
    );
}



