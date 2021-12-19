import React from 'react'
import { useState, useEffect } from 'react'
import Trending from './Trending';
const axios = require('axios')
const API_KEY = "0575d9f5a086e248634cab4ee9434e9a";
const API_LIST = {
    "configuration_api": "https://api.themoviedb.org/3/configuration",
    "trending_movies_day": "https://api.themoviedb.org/3/trending/all/day"
}

function GetConfigurations() {
    const promise = axios.get(API_LIST.configuration_api + "?api_key=" + API_KEY)
    return promise;
}

function getTrendingMovies() {
    const promise = axios.get(API_LIST.trending_movies_day + "?api_key=" + API_KEY)
    return promise;
}

export default function MainContent() {
    const [configuration, setConfiguration] = useState();
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        let response = GetConfigurations("0575d9f5a086e248634cab4ee9434e9a")
        response
            .then(res => {
                // handle success
                setConfiguration(res.data.images.base_url);
                let trendingData = getTrendingMovies()
                trendingData.then(res => {
                    let trending_movies = res.data.results.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1)
                    trending_movies = trending_movies.slice(0, 5)
                    setTrending(trending_movies)
                })
            })
            .catch(error => {
                // handle error
                console.log(error);

            })
            .then(function () {
                // always executed
            });
    }, []);

    return (
        <>
            <Trending trending={trending} />
        </>
    )
}
