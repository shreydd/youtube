import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { YOUTUBE_COMMENTS_API, YOUTUBE_SEARCH_RESULTS_REMAINING_CONFIG } from '../utils/constants';
import CommentReply from './CommentReply';
import VideoComment from './VideoComment';

const WatchPage = () => {

    const [videoComments, setVideoComments] = useState([]);
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"))

    const dispatch = useDispatch();

    // get comments
    const getComments = async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API + searchParams.get("v") + YOUTUBE_SEARCH_RESULTS_REMAINING_CONFIG)
        const json = await data.json()
        console.log(json?.items)
        setVideoComments(json?.items);
    }


    useEffect(() => {
        dispatch(closeMenu())
        getComments()
    }, [])

    return (
        <div className='px-5 py-10 flex-1 lg:flex-initial lg:w-[65rem] h-[30rem] md:h-[40rem] lg:h-[45rem]'>
            <iframe
                height='75%'
                width='100%'
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>

            <p className='text-gray-700 italic mt-10 mb-2'>Comments</p>
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
                                        <CommentReply item={item}/>
                                    }
                                </div>
                            )
                        })
                }
            </section>
        </div>
    )
}

export default WatchPage