import React from 'react'
import FilterButton from './FilterButton'

const ButtonList = () => {


    let list = ["IN", "US", "UK"];

    return (
        <div className='px-5 flex items-center'>
            <p className='mr-2'>Watch trending videos in</p>
            {
                list.map((item, index) => {
                    return (
                        // TODO: working ocClick functionality
                        <FilterButton name={item} key={index} />
                    )
                })
            }
        </div>
    )
}

export default ButtonList