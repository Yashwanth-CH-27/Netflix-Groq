

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute pt-[14%] md:pt-[19%] px-12 md:px-20 bg-gradient-to-r from-black aspect-video -ml-10 h-[200px] md:h-auto'>
        <h1 className='font-bold text-[15px] md:text-3xl m-2'>{title}</h1>
        <p className='hidden md:inline-block w-3/12 mt-2 m-2 text-[14px]'>{overview}</p>
        <div>
            <button className='bg-amber-50 text-black p-1 md:px-5 md:py-2 md:mt-4 ml-2 text-[10px] md:text-[16px] text-center font-bold rounded-lg'>⯈ Play</button>
            <button className='bg-amber-50 text-black p-1 md:px-5 md:py-2 md:mt-4 ml-2 text-[10px] md:text-[16px] text-center font-bold rounded-lg'>ⓘ More info</button>
        </div>
    </div>
  )
}

export default VideoTitle