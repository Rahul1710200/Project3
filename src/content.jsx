import React from 'react'
import download from './assets/download.webp'


export default function Content() {
    return (
        <>

            <div>
                <h1 className='text-blue-600 text-2xl font-bold flex flex-col w-full items-center mt-14'>Download and Save the Key dates to your calendar below!</h1>
            </div>

            <div className='flex flex-col w-[78vw] items-center relative blur'>
                <div className='flex mt-14'>
                    <div id='img'>
                        <img src={download} className='w-[6vw]' alt="" />
                    </div>
                    <div id='info' className='ml-14'>
                        <h1 className='font-bold text-xl'>Peak Calendar Dates</h1>
                        <p className='font-normal text-sm mt-1'>All your key dates for 2024</p>
                        <span className='text-blue-600'>peak_calendar_dates</span>
                    </div>
                </div>

                <div className='flex mt-14 ml-6'>
                    <div id='img'>
                        <img src={download} className='w-[6vw]' alt="" />
                    </div>
                    <div id='info' className='ml-14'>
                        <h1 className='font-bold text-xl'>Another File</h1>
                        <p className='font-normal text-sm mt-1'>More premium Documents for you</p>
                        <span className='text-blue-600'>next-document</span>
                    </div>
                </div>

                <div className='flex flex-col mt-14 ml-24'>
                    <h1 className='text-blue-600 font-bold text-2xl '>Super Premium Information</h1>
                    <p className='mt-2'>Some information sooooo premium it's behind a paywall!</p>
                </div>
            </div>
            <div className='absolute w-[34vw] lg:w-[30vw] h-[17.4vw] lg:h-[15vw] bg-blue-600 flex lg:top-[12vw] lg:left-[38vw] top-[19vw] left-[37vw] lg:pt-14 pl-12 pd-4 pt-10  flex-col ' style={{ clipPath: "polygon(0% 15%, 85% 0%, 100% 100%, 0% 100%)" }}>
                <h1 className=' text-xl lg:text-3xl text-gray-100 font-bold'>Unlock this content<span className='text-orange-500'>.</span></h1>
                <p className='text-gray-50 mt-2 lg:text-normal text-xs'>Enter your email to unlock this content</p>
                <div className='lg:mt-8 mt-4'>
                    <p className='text-white text-xxs'>Email address</p>
                    <input type="text" className='mr-3 lg:h-[1.8vw] lg:w-[14.5vw] w-[15vw] h-[2.4vw]' />
                    <button className='border-1 border-blue-100 lg:text-sm font-bold text-blue-500 lg:p-1 lg:pr-2 lg:pl-2 text-xs p-1  bg-blue-200'>Reveal Content</button>
                </div>
            </div>


        </>
    )
}
