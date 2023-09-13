import React, { Suspense, useDeferredValue, useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';


import SearchResultsLoader from '../components/loaders/SearchResultsLoader';
import MovieResults from '../components/MovieResults';
import PopularMovies from '../components/PopularMovies';



function HomePage() {
  const [search, setSearch] = useState('');
  //const {debouncedValue, setDebouncedValue} = useDebounce(search, 1000);
  const deferredSearchTerm = useDeferredValue(search);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  
  useEffect(() => {

  }, [search]);
  

  if (deferredSearchTerm) {
    console.log("Searching: " + deferredSearchTerm);
    
  } else {
    // If there's not search term, then don't search for anything. Just show the most popular movies...
    console.log("No Search Term. Showing Popular Movies...");
  }
  
  return (
    <>
      <div className='flex justify-center items-center min-h-[6rem] text-center'>

        <form className="flex items-center">   
            <label htmlFor="movie-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
                    </svg>
                </div>
                <input type="text" id="movie-search" 
                className="bg-neutral-content border border-gray-50 text-primary-content text-sm rounded-lg focus:ring-primary focus:border-primary pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Movies..." 
                onChange={handleInputChange}
                required />
                
            </div>
        </form>

      </div>
      

      <Suspense fallback={<SearchResultsLoader />}>
        <div className='container md:mx-auto md:w-10/12 xl:w-9/12 py-4 px-4'>
          { search && "Searching for " + deferredSearchTerm + "..."}
          {
            search == "" ? <PopularMovies /> : <MovieResults searchTerm={deferredSearchTerm} />
          }
        </div>
      </Suspense>
    </>
  );
}

export default HomePage;