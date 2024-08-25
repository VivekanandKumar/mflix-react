import React from 'react'
import brokenImage from '../../assets/default.jpg';
const compactFormat = (value = 0) => new Intl.NumberFormat('en-US', { notation: 'compact' }).format(value)

const MovieCard = ({ data: movie }) => {
    const hour = parseInt(movie.runtime / 60);
    const minutes = parseInt(movie.runtime % 60);
    let runtime = '';
    if (hour) runtime += hour + 'Hrs ';
    runtime += minutes + 'Min'
    movie.genres = Array.isArray(movie.genres) ? movie.genres : [];
    movie.poster = movie.poster || '';
    return (
        <div className='col-12 col-md-4 col-lg-3 mb-3 rounded'>
            <div className="card p-0 border-0 overflow-hidden" style={{ background: '#333' }}>
                <div className='position-relative'>
                    <img style={{ height: '18rem', objectFit: 'cover' }} src={movie.poster} className="w-100" alt="poster" onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = brokenImage;
                    }} />
                    <div className='d-flex align-items-end imageCover position-absolute p-2'>
                        <div>
                            {
                                movie.genres.map((el, index) => <small key={el + index} className='genere mb-1 ms-1'>{el}</small>)
                            }
                        </div>
                    </div>
                </div>
                <div className="card-body text-light">
                    <h6 className='text-truncate mb-1'>{movie.title}</h6>
                    <div className="small text-white-50">
                        <span>{movie.year}</span>
                        <span className='ms-3'>{runtime}</span>
                    </div>
                    <div className='mt-1 d-flex align-items-center gap-1'>
                        <span style={{ color: 'gold' }} className="material-symbols-rounded">star_rate</span>
                        <span className='small font-bold'>{movie?.imdb?.rating || 0} <span className='text-white-50'>({compactFormat(movie?.imdb?.votes) || 0})</span></span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieCard