

function MovieLoader() {
  return (
    <div className="flex justify-center items-center text-center">
        <div>
            <span className="loading loading-infinity loading-lg"></span>
            <h1 className="text-xl font-bold">
                Loading...
            </h1>
            <h2 className="text-lg">
                Grab some popcorn!
            </h2>
        </div>
    </div>
  );
}

export default MovieLoader;