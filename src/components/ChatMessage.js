import React from 'react'

const ChatMessage = ({author, text}) => {
    return (
        <div className='flex items-center overflow-x-visible my-3'>
            <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' className='h-10 w-10 mr-2' alt='' />
            <div>
                <p className='font-bold text-gray-600 mb-0 leading-none'>{author}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ChatMessage