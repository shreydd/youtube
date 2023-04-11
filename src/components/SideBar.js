import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { LOFI_2021_VIDEO_ID } from '../utils/constants';
// import store from '../utils/store'

const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    // early return
    if (!isMenuOpen) return null

    return (
        <div className='w-48 p-5 shadow-md'>
            <ul className='grid grid-flow-row gap-4'>
                <li> <Link to='/'> Trending </Link></li>
                <li><Link to={'/watch?v='+LOFI_2021_VIDEO_ID}>Lofi</Link></li>
                {/* <li>Music</li> */}
                {/* <li>News</li> */}
                {/* <li>Series</li> */}
            </ul>
        </div>
    )
}

export default SideBar