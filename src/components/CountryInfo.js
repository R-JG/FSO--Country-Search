import React from 'react';

const CountryInfo = ({
    name,
}) => {

    // add: api call for flag, languages spoken, capital, link to maps, api call for weather...

    return (
        <div className='CountryInfo' >
            <h1>{name}</h1>
        </div>
    );
};

export default CountryInfo;