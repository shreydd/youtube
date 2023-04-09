import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { storeSuggestions } from '../utils/searchSlice';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();

    const searchCache = useSelector((store) => store.search)


    useEffect(() => {

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions()
            }
        }, 200) // 200 ms debounce

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        // get data from api
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1])
        console.log('API call -', json[1])

        // update data in the store
        dispatch(
            storeSuggestions({
                [searchQuery]: json[1]
            })
        )
    }



    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <header className='grid grid-flow-col py-5 shadow-md'>
            <div className='col-span-2 flex justify-start items-center pl-5'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-7 cursor-pointer'
                    src='https://static.thenounproject.com/png/1166835-200.png'
                    alt='menu'
                />
                <a href='/'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/375px-YouTube_Logo_2017.svg.png'
                        className='h-7 ml-4'
                        alt='youtube logo'
                    />
                </a>
            </div>

            <div className='col-span-8 px-10'>
                <div className='flex'>
                    <input
                        type='text'
                        className='border border-gray-400 p-2 px-4 w-1/2 rounded-l-full items-center'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        // causing the problem of not being able to input search suggestion
                        // onBlur={() => setShowSuggestions(false)}
                    />
                    <button
                        className='border rounded-r-full border-gray-400 bg-gray-200 px-4 py-2'>
                        <img src='https://static.thenounproject.com/png/1017685-200.png' alt='search icon' className='h-6' />
                    </button>
                </div>
                {showSuggestions && (<div className='absolute w-1/3 bg-white rounded-lg mt-[0.1rem] grid-flow-col shadow-lg'>
                    <ul>
                        {
                            suggestions.map(item => {
                                return (
                                    <li 
                                        key={item} 
                                        onClick={() => setSearchQuery(item)}
                                        className='py-2 px-5 flex rounded-lg items-center shadow-sm hover:bg-gray-200'> 
                                            <img src='https://static.thenounproject.com/png/1013427-200.png' className='h-4 mt-[0.1rem] mr-2' />{item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>)}
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