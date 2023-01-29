import React from 'react';

const CountryListItem = ({ 
    country,
    setSelectedCountry,
}) => {
    
    return (
        <li 
            className='CountryListItem'
            onClick={() => setSelectedCountry(country)} >
            {country.name.common}
        </li>
    );
};

export default CountryListItem;