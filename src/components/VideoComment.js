import React from 'react'

const VideoComment = ({ item }) => {
    return (
        <div className='mb-5 flex items-center'>
            <img className='rounded-full mr-2 object-cover h-22' src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="commentor display img" />
            <div>
                <p className='font-bold mb-[0.15rem]'>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                <p>{item?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
            </div>
        </div>
    )
}

export default VideoComment