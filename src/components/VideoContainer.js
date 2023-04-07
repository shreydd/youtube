import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getPopularVideos();
    }, []);

    const getPopularVideos = async() => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();

        setVideos(json.items)
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5'>
            {
                videos.map(video => {
                    return (
                        <Link to={'/watch?v='+video.id} key={video.id} className='hover:shadow-lg'>
                            <VideoCard info={video} />
                        </Link>
                    )

                })
            }
        </div>
    )
}

export default VideoContainer