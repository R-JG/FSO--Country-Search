import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

    const [allCountryData, setAllCountryData] = useState(null);

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => setAllCountryData(response.data));
    }, []);

    if (!allCountryData) return console.log('fetching country data...');

    return (
        <div className='App' >
            <header className='search-bar' >TEST HEADER</header>
            <main className='info-container' >TEST MAIN</main>
        </div>
    );
};

export default App;