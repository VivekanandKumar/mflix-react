import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import Pagignator from './components/pagignator'
const App = () => {
    const screenWidth = window.screen.width;
    let range = 3;
    let itemsPerPage = 10;
    if (screenWidth > 400) range = 5;
    if (screenWidth > 760) {
        range = 8;
        itemsPerPage = 15;
    }
    if (screenWidth > 1020) {
        range = 15;
        itemsPerPage = 20;
    }

    const [itemOffset, setItemOffset] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [movieFilter, setMovieFilter] = useState({});
    const [movies, setMovies] = useState([]);


    const fetchMovies = async ({ skip = 0, search = '' }) => {
        try {
            const response = await fetch(`http://localhost:3000/movie?fetch=${itemsPerPage}&skip=${skip}&s=${search}`);
            if (response.ok) {
                const data = await response.json();
                setTotalCount(data?.totalCount || 0);
                setMovies(data?.movies || []);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies(movieFilter);
    }, [movieFilter])

    useEffect(() => {
        setMovieFilter((prevState) => ({
            ...prevState,
            skip: itemOffset
        }))
    }, [itemOffset])

    const pageCount = Math.ceil(totalCount / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        if (totalCount) {
            const skipItem = (event.selected * itemsPerPage) % totalCount;
            setItemOffset(skipItem);
        } else {
            setItemOffset(0);
        }
    };
    let timer;
    const debounce = (callback, delay = 1000) => {
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                callback(...args);
            }, delay)
        }
    }
    const handleDebouncing = (event) => {
        const search = event.target.value.trim();
        setMovieFilter({ skip: 0, search })
    }
    const handleSearch = debounce(handleDebouncing);


    return (
        <main className='container'>
            <Navbar data={{ handleSearch }} />
            <div className='row'>
                {
                    movies.map(el => <MovieCard key={el._id} data={el} />)
                }
            </div>
            <Pagignator data={{ handlePageClick, pageCount, range }} />
        </main>
    )
}

export default App;