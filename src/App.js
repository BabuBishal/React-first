import React from "react";
import { useEffect } from "react";

//api key = 157451d1

const API_URL = 'http://www.omdbapi.com?apikey=157451d1';

const App = () => {

    const searchMovies = async(title) => {
        const response =await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return (
        <h1>App1</h1>
    );
}

export default App;