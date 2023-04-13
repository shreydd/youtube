import React from 'react'

const VideoCard = ({ info }) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    function formatViews(num) {
        switch (true) {
          case num >= 1000000000:
            return (num / 1000000000).toFixed(1) + 'B';
          case num >= 1000000:
            return (num / 1000000).toFixed(1) + 'M';
          case num >= 1000:
            return (num / 1000).toFixed(1) + 'K';
          default:
            return num.toString();
        }
      }
      

    return (
        <div className='rounded col-span-1'>
            <img src={thumbnails.medium.url} alt={title + "thumbnail"} className='w-full rounded' />
            <ul className='py-2'>
                <li className='font-bold mb-1 text-base leading-[1.28]'>{title}</li>
                <li className='text-gray-600'>{channelTitle}</li>
                {
                    statistics?.viewCount 
                        && 
                        <li className='text-gray-600 text-xs'>
                            {
                                formatViews(statistics?.viewCount)
                            } views
                        </li>
                }
            </ul>
        </div>
    )
}

export default VideoCard