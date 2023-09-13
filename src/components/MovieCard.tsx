import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }: any) => {

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate("/movie/" + movie.id);
    };

    return (
        <div className="card bg-base-100 w-3/12 h-[26rem] shadow-xl image-full">
            <figure><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></figure>
            <div className="card-body justify-end">
                <h2 className="card-title">{movie.title}</h2>
                <div className="line-clamp-4 hover:line-clamp-6">{movie.overview}</div>
                <div className="card-actions justify-center">
                    <button onClick={(handleViewDetails)} className="btn btn-primary mt-4">View Details</button>
                </div>
            </div>
        </div>    
    );
};

export default MovieCard;

