import React from 'react'

const FilterButton = ({name}) => {
  return (
    <button className='px-5 py-2 m-2 rounded-full bg-gray-200 cursor-not-allowed'>{name}</button>
  )
}

export default FilterButton