import React from 'react'

const VideoCard = ({ info }) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return (
        <div className='rounded col-span-1'>
            <img src={thumbnails.medium.url} alt={title + "thumbnail"} className='w-full rounded' />
            <ul className='p-2'>
                <li className='font-bold mb-1 text-base'>{title}</li>
                <li className='text-gray-600'>{channelTitle}</li>
                <li className='text-gray-600 text-sm'>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard