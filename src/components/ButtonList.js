import React from 'react'
import { Link } from 'react-router-dom';
import FilterButton from './FilterButton'

const ButtonList = () => {

    let list = ["IN", "US", "NZ", "GB"];

    return (
        <div className='px-5 flex items-center'>
            <p className='mr-2'>Watch trending videos in</p>
            {
                list.map((item, index) => {
                    return (
                        <Link to={"?r="+item} key={index}>
                            <FilterButton name={item}  />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ButtonList