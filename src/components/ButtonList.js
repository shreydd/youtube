import React from 'react'
import { Link } from 'react-router-dom';
import FilterButton from './FilterButton'

const ButtonList = () => {

    let list = ["IN", "US", "NZ", "GB"];

    return (
        <div className='px-5 py-2 md:flex flex-wrap grid grid-cols-2'>
            <p className='mx-2 col-span-2 md:col-span-auto md:flex md:items-center'>Watch trending videos in</p>
            <div className='col-span-2 md:col-span-auto overflow-x-scroll scrollbar-hide flex flex-1'>
                {
                    list.map((item, index) => {
                        return (
                            <Link to={"?r=" + item} key={index}>
                                <FilterButton name={item} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ButtonList