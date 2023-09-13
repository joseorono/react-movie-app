import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }: any) => {

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate("/movie/" + movie.id);
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.overview}</p>
                <div className="card-actions justify-center">
                    <button onClick={(handleViewDetails)} className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>    
    );
};

export default MovieCard;

