import React from 'react';

const CountryInfo = ({
    name,
    flagLink,
    mapLink,
    region,
    subregion,
    capital,
    population,
}) => {

    return (
        <div className='CountryInfo' >
            <h1 className='info--name'>{name}</h1>
            <img 
                className='country-flag' 
                src={flagLink} 
                alt='Flag' 
            />
            <h4 className='info--region'>
                {`Region: ${region}`}
            </h4>
            <h4 className='info--subregion'>
                {`Subregion: ${subregion}`}
            </h4>
            <a 
                className='map-link' 
                href={mapLink} 
                target='_blank' >
                    View on map
            </a>
            <h4 className='info--capital'>
                {`Capital: ${capital}`}
            </h4>
            <h4 className='info--population'>
                {`Population: ${population.toLocaleString()}`}
            </h4>
        </div>
    );
};

export default CountryInfo;