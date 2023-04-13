import React from 'react'

const CommentReply = ({ item }) => {
    const replies = item?.replies?.comments

    return (
        replies?.map(reply => {
            return (<div className='pb-5 flex items-center pl-5 md:ml-5 border-l-1 border-black' key={reply?.id}>
                <img className='rounded-full mr-2 object-cover h-22 w-10' src={reply?.snippet?.authorProfileImageUrl} alt="commentor display img" />
                <div>
                    <p className='font-bold text-gray-800 text-xs mb-[0.15rem]'>{reply?.snippet?.authorDisplayName}</p>
                    <p className='text-sm'>{reply?.snippet?.textDisplay}</p>
                </div>
            </div>)
        })
    )
}

export default CommentReply