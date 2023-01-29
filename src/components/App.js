import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryListItem from './CountryListItem';
import CountryInfo from './CountryInfo';

const App = () => {

    const [allCountryData, setAllCountryData] = useState(null);
    const [userSearch, setUserSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => setAllCountryData(response.data));
    }, []);

    // Reduce is being called on a copy of the state array because the 
    // iteration is being broken by modifying the array when acc.length 
    // is a certain size.
    useEffect(() => {
        if (userSearch === '') return;
        const countriesSearched = [...allCountryData]
            .reduce((acc, curr, i, arr) => {
                const country = curr.name.common.toLowerCase();
                const search = userSearch.toLowerCase();
                if (country.startsWith(search)) acc.push(curr);
                if (acc.length === 10) arr.splice(i + 1);
                return acc;
            }, []);
        setSearchResult(countriesSearched);
    }, [userSearch]);

    useEffect(() => {
        if (searchResult.length === 1) setSelectedCountry(searchResult[0]);
        if (searchResult.length > 1) setSelectedCountry(null);
    }, [searchResult]);

    if (!allCountryData) return console.log('fetching country data...');

    const handleInputChange = event => {
        setUserSearch(event.target.value);
    };

    return (
        <div className='App' >
            <header className='header' >
                <h1 className='header--title' >Country Search!</h1>
                <input 
                    className='header--search-bar' 
                    type='text'
                    value={userSearch}
                    onChange={handleInputChange} />
                <h5>(data provided by restcountries.com)</h5>
            </header>
            <main className='info-container' >
                {(selectedCountry) 
                    ? <CountryInfo 
                        name={selectedCountry.name.common}
                        flagLink={selectedCountry.flags.svg}
                        mapLink={selectedCountry.maps.googleMaps}
                        region={selectedCountry.region}
                        subregion={selectedCountry.subregion}
                        capital={selectedCountry.capital[0]}
                        population={selectedCountry.population} /> 
                    : searchResult.map(country => 
                        <CountryListItem 
                            key={country.name.common}
                            country={country}
                            setSelectedCountry={setSelectedCountry}
                        />)}
            </main>
        </div>
    );
};

export default App;