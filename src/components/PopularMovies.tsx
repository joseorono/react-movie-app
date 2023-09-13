
import useSWR from 'swr';
import MovieCard from './MovieCard';



const popularMoviesSwrFetcher = async (url:string) => {
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



export default function PopularMovies() {

    let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${import.meta.env.VITE_TMDBAPIKEY}`
    console.log( "URL de peliculas populares: " + url);
    const { data, error } = useSWR(url, popularMoviesSwrFetcher, { suspense: true })
    console.log(data.results);

    return (
        <div className='MovieResults'>
            <h1>The Most Popular Right Now</h1>
            <div className="flex gap-6 flex-wrap justify-between my-10">
            {
            data.results.map((movie:any, index:number) => {
                //console.log(movie);
                return <MovieCard movie={movie} key={"movie-"+index} />
            })
            }
            </div>
        </div>
    )
        
}