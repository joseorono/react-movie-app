

import { Suspense } from 'react'

import { useParams } from 'react-router-dom';

import MovieLoader from "../components/loaders/MovieLoader";
import MovieDetails from '../components/movieDetails';

export type MovieParams = {
  movieId: string;
};

export default function MovieDetailsPage() {

  let { movieId } = useParams<keyof MovieParams>() as MovieParams;

  return (
    <>

      <Suspense fallback={<MovieLoader />}>
        <MovieDetails movieId={movieId} />
      </Suspense>

    </>
  );
}



