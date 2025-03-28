import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchResult from './GptSearchResult'
import { bg_logo } from '../utils/constants'

const GptPage = () => {
  return (
    <div className='w-screen h-full bg-black/70'>
        <div className="fixed -z-10">
                <img
                  className='h-screen w-screen object-cover'
                  src={bg_logo}
                  alt="bg-image"
                />
              </div>
        <GptSearchBar/>
        <GptSearchResult/>
    </div>
  )
}

export default GptPage