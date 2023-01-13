import React from 'react'
const Album = ({ album }) => {
    const { images, name, artists, popularity, external_urls } = album;
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
                <img src={images[0].url} alt={artists[0].name} className='card-img-top' />
            </div>
            <div className='card-body'>
                <p className='card-text'>album: {name}</p>
                <p className='card-text'>popularity: {popularity}</p>
            </div>
            <div className='card-footer'>
                <a href={external_urls} target="_blank" rel='noopener noreferrer' className='btn btn-primary btn-block'>listen album</a>
            </div>
        </div>
    );
}

export default Album;