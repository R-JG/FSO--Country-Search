import React from 'react';

const CountryListItem = ({ 
    name,
    setUserSearch,
}) => {
    return (
        <li 
            className='CountryListItem'
            onClick={() => setUserSearch(name)} >
            {name}
        </li>
    );
};

export default CountryListItem;