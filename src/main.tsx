import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//import { render } from 'react-dom'

// Pages
import AppLayout from "./AppLayout.tsx";
import HomePage from './pages/HomePage.tsx';
import ErrorPage from "./pages/ErrorPage.tsx";
import MovieDetails from './components/MovieDetails.tsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: "movie/:movieId",
        element: <MovieDetails />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*
    <App />
    */}
  </React.StrictMode>,
)

