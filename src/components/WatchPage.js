import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className='px-5 py-10 flex-1 lg:flex-initial lg:w-[65rem] h-[30rem] md:h-[40rem] lg:h-[45rem]'>
            <iframe
                height='80%'
                width='100%'
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>

            <p className='text-gray-700 italic mt-10 mb-2'>Comments</p>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage