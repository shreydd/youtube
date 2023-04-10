import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_RESULTS_KEYWORD, YOUTUBE_SEARCH_RESULTS_REMAINING_CONFIG } from '../utils/constants';
import VideoCard from './VideoCard';

const SearchResults = () => {

    const [resultsList, setResultsList] = useState([]);

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('search_query'))

    useEffect(() => {
        getSearchResults()
    }, [])

    const getSearchResults = async () => {
        const data = await fetch(YOUTUBE_SEARCH_RESULTS_KEYWORD + searchParams.get('search_query') + YOUTUBE_SEARCH_RESULTS_REMAINING_CONFIG)
        const json = await data.json();

        console.log(json.items)
        setResultsList(json.items)
    }

    return (
        <>
            <div className=''>
                <h3 className='text-2xl mb-3 px-5 py-3'>Top results:</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5'>
                    {
                        resultsList.length == 0
                            ?
                            <div>Loading</div>
                            :
                            resultsList.map(item => {
                                return (
                                    item?.id?.videoId &&
                                    <Link to={'/watch?v='+item?.id?.videoId}>
                                            <VideoCard info={item} />
                                    </Link>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default SearchResults