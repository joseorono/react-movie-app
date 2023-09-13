

import { Suspense } from 'react'
import useSWR from 'swr'
import { Routes, Route, useParams } from 'react-router-dom';

import MovieLoader from "../components/loaders/MovieLoader";
import MovieDetails from '../components/movieDetails';

export type MovieParams = {
  movieId: string;
};

export default function MovieDetailsPage() {

  let { movieId } = useParams<keyof MovieParams>() as MovieParams;

  const movie = {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.",
    release_date: "2001-12-18",
    vote_average: 8.3,
    runtime: 178,
    poster_path: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    
  }

  return (
    <>

      <Suspense fallback={<MovieLoader />}>
        <MovieDetails movieId={movieId} />
      </Suspense>

    </>
  );
}



