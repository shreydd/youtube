import React from 'react'
import FilterButton from './FilterButton'

const ButtonList = () => {

    
    let list = ["news", "live", "cricket", "football", 'volleyball'];

    return (
        <div className='px-5'>
            {
                list.map((item, index) => { 
                    return (
                        <FilterButton name={item} key={index} />
                    )
                })
            }
        </div>
    )
}

export default ButtonList