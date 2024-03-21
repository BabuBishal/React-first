import React from "react";
import { useEffect, useState} from "react";

import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//api key = 157451d1

const API_URL = 'http://www.omdbapi.com?apikey=157451d1';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        searchMovies('');
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setMovies(data.Search);
      };

    return (
        <div className="app">
            <h1>MovieHub</h1>

            <div className='search'>
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}></input>
                    <img 
                        src={SearchIcon}
                        alt='search'
                        onClick={() => searchMovies(searchTerm)}
                        }
                        />
            </div>
            {
                movies?.length > 0 ?
                    (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard  movie={movie}/>
                        ) )}
                    </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies Found</h2>
                        </div>
                    )
            }
            
        </div>
    );
}

export default App;