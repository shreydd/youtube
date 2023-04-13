import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { MOCK_LIVE_CHAT_QUOTES_API } from '../utils/constants'
import ChatMessage from './ChatMessage'

const LiveChat = () => {

    const [userMessage, setUserMessage] = useState("");

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
        <section className='hidden xl:flex flex-1 flex-col'>
            <div className='m-5 mt-10 p-5 h-[30rem] flex flex-col-reverse border border-slate-300 rounded overflow-y-scroll'>
                {
                    messages.map((item, index) => {
                        return <ChatMessage key={index} author={item?.author} text={item?.text} />
                    })
                }
            </div>
            <div className='flex mx-5'>
                <input
                    className='rounded border flex-1 border-slate-300 p-2 mr-1'
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                />
                <button className=' rounded-sm p-2 border border-slate-300' onClick={() => {
                    dispatch(addMessage({
                        author: "user",
                        text: userMessage
                    }));
                    setUserMessage("")
                }}> <img className='h-8 w-8' src='https://static.thenounproject.com/png/5576231-200.png' alt='send button img'/> </button>
            </div>
        </section>
    )
}

export default LiveChat