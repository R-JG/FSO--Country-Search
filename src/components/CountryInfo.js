import React from 'react';

const CountryInfo = ({
    name,
}) => {
    return (
        <div className='CountryInfo' >
            <h1>{name}</h1>
        </div>
    );
};

export default CountryInfo;