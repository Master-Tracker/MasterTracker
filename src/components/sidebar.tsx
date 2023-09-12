import React from 'react'

export function Sidebar(){
  return (
    <div className='relative h-screen bg-secondary w-[16rem] z-10 overflow-y-auto overflow-x-hidden p-4'>
        <div className='flex'>   
            <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.6584 49.2026C37.2558 45.6052 37.2575 39.7744 33.6622 36.1791C30.0669 32.5838 24.2361 32.5855 20.6387 36.1829C17.0413 39.7803 17.0396 45.6111 20.6349 49.2064C24.2302 52.8017 30.061 52.8 33.6584 49.2026Z" fill="#EE6C4D"/>
            <path d="M12.4248 15.5464L25.4445 28.5662L12.4144 41.5963C10.7044 39.8863 9.3482 37.856 8.42325 35.6213C7.4983 33.3866 7.02273 30.9914 7.0237 28.5724C7.02466 26.1533 7.50215 23.7579 8.42888 21.5229C9.35561 19.2879 10.7134 17.2571 12.4248 15.5464Z" fill="#3D5A80"/>
            <path d="M41.8584 41.5856L28.8387 28.5659L41.8688 15.5358C43.5788 17.2458 44.935 19.2761 45.86 21.5108C46.7849 23.7455 47.2605 26.1407 47.2595 28.5597C47.2585 30.9787 46.7811 33.3742 45.8543 35.6092C44.9276 37.8442 43.5698 39.875 41.8584 41.5856Z" fill="#3D5A80"/>
            <path d="M40.1826 13.8492L27.1629 26.8689L14.1328 13.8388C15.8428 12.1288 17.8731 10.7726 20.1078 9.84763C22.3424 8.92268 24.7377 8.44711 27.1567 8.44807C29.5757 8.44904 31.9712 8.92652 34.2062 9.85325C36.4412 10.78 38.472 12.1378 40.1826 13.8492Z" fill="#EE6C4D"/>
            </svg>
            <h1 className='text-brandColor2 font-bold text-3xl pl-4'>Master <span className='text-brandColor1'>Tracker</span></h1>
        </div>
        
    </div>
  )
}
