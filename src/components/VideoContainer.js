import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {

    const [searchParams] = useSearchParams();
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getPopularVideos();
    }, [searchParams]);

    const getPopularVideos = async() => {
        let regionCode = "US"
        if(searchParams.get("r")) {
            regionCode = searchParams.get("r")
        }
        const data = await fetch(YOUTUBE_API+regionCode);
        const json = await data.json();
        // console.log(json.items)
        setVideos(json.items)
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5'>
            {   

                videos?.length === 0 
                    ?
                    <p>loading</p>
                    :
                    videos?.map(video => {
                        return (
                            <Link to={'/watch?v='+video.id} key={video.id} className=''>
                                <VideoCard info={video} />
                            </Link>
                        )

                    })
            }
        </div>
    )
}

export default VideoContainer