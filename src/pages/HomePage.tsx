import React, { Suspense, useState } from 'react';
import useDebounce from '../hooks/useDebounce';


import SearchResultsLoader from '../components/loaders/SearchResultsLoader';
import MovieResults from '../components/movieResults';



function HomePage() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);
  let url = "";
  if (debouncedSearch) {
    console.log("Searching: " + debouncedSearch);
    url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${import.meta.env.VITE_TMDBAPIKEY}`
  } else {
    // If there's not search term, then don't search for anything. Just show the most popular movies...
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDBAPIKEY}`
  }
  
  return (
      <Suspense fallback={<SearchResultsLoader />}>
        <MovieResults url={url} />
      </Suspense>
  );
}

export default HomePage;