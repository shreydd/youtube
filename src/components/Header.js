import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <header className='grid grid-flow-col py-5 shadow-md'>
            <div className='col-span-2 flex justify-start items-center pl-5'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-7 cursor-pointer'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'
                    alt='menu'
                />
                <a href='/'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/375px-YouTube_Logo_2017.svg.png'
                        className='h-7 ml-2'
                        alt='youtube logo'
                    />
                </a>
            </div>

            <div className='col-span-8 flex justify-center items-center'>
                <input type='text' className='border border-gray-400 p-2 w-1/2 rounded-l-full items-center' />
                <button className='border rounded-r-full border-gray-400 bg-gray-200 px-4 py-2'><img src='https://static.thenounproject.com/png/1017685-200.png' alt='search icon' className='h-6' /></button>
            </div>

            <div className='col-span-2 flex justify-end items-center pr-5'>
                <img
                    src='https://static.thenounproject.com/png/1743563-200.png'
                    className='h-7'
                    alt='user'
                />
            </div>
        </header>
    )
}

export default Header