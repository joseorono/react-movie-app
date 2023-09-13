
import useSWR from 'swr';
import MovieCard from './MovieCard';



const resultsSwrFetcher = async (url:string) => {
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



export default function MovieResults({ url }: any) {

    console.log( "URL a consultar: " + url);
    const { data, error } = useSWR(url, resultsSwrFetcher, { suspense: true })
    console.log(data.results);

    return (
        <div>
            <h1>We found {data.results.length} results.</h1>
            <div className="flex flex-wrap justify-between my-10">
            {
            data.results.map((movie:any) => {
                //console.log(movie);
                return <MovieCard movie={movie} />
            })
            }
            </div>
        </div>
    )
        
}