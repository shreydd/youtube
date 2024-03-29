import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_COMMENTS_API, YOUTUBE_REMAINING_CONFIG } from '../utils/constants';
import CommentReply from './CommentReply';
import VideoComment from './VideoComment';

const CommentsContainer = () => {

    const [videoComments, setVideoComments] = useState([]);
    const [searchParams] = useSearchParams();

    const getComments = async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API + searchParams.get("v") + YOUTUBE_REMAINING_CONFIG)
        const json = await data.json()
        // console.log(json?.items)
        setVideoComments(json?.items);
    }

    useEffect(() => {
        getComments()
    }, [searchParams])

    return (
        <>
            <p className='font-bold text-sm border-b pb-4 text-gray-800 border-gray-400 mt-10 mb-4'> {videoComments?.length} · Top comments</p>
            <section className='grid grid-flow-row gap-5'>
                {
                    videoComments?.length === 0
                        ?
                        <div>Loading</div>
                        :
                        videoComments?.map(item => {
                            return (
                                <div key={item?.id}>
                                    <VideoComment item={item} />
                                    {
                                        item?.replies?.comments
                                        &&
                                        <CommentReply item={item} />
                                    }
                                </div>
                            )
                        })
                }
            </section>

        </>
    )
}

export default CommentsContainer