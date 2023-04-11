import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { MOCK_LIVE_CHAT_QUOTES_API } from '../utils/constants'
import ChatMessage from './ChatMessage'

const LiveChat = () => {

    const dispatch = useDispatch();
    const messages = useSelector(store => store.chat.messages)

    const getChatMessage = async () => {
        
        const data = await fetch(MOCK_LIVE_CHAT_QUOTES_API);
        const json = await data.json();
        
        dispatch(addMessage({
            author: json.author,
            text: json.text
        }));
    }

    useEffect(() => {
        // get chat message every 2secs
        const interval = setInterval(() => {
            console.log('interval')
            getChatMessage();
        }, 2000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <section className='hidden xl:flex flex-col-reverse border border-slate-300 rounded flex-1 mx-5 my-10 p-5 h-[30rem] overflow-y-scroll scroll-smooth'>
            {
                messages.map((item, index) => {
                    return <ChatMessage key={index} author={item?.author} text={item?.text} />
                })
            }
        </section>
    )
}

export default LiveChat