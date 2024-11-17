import React from 'react'
import { TfiEmail } from 'react-icons/tfi'
const RightBar = () => {
  return (
    <div>
        <div>
            <div className='space-y-4 flex flex-col'>
                <div className='flex justify-between items-center px-3 md:px-2 '>
                    <div>
                    <h1 className='text-xl font-semibold text-[#303972]'>Recent Students</h1>
                    <p className='text-xs text-[#A098AE]'>You have 456 students</p>
                    </div>
                    <button className='bg-[#4d44b5] text-white h-8 w-8 rounded-full'>+</button>
                </div>
                {/* students  */}
                <div className='space-y-4'>
                <div className='flex items-center justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>ClassVII A</p>
                        </div>   
                    </div>
                    <div>
                        <TfiEmail 
                        color='#A098AE'
                        className='w-10 h-10 border rounded-full border-[#A098AE] p-2'/>
                        </div>
                </div>
                <div className='flex items-center justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>ClassVII A</p>
                        </div>   
                    </div>
                    <div>
                        <TfiEmail 
                        color='#A098AE'
                        className='w-10 h-10 border rounded-full border-[#A098AE] p-2'/>
                        </div>
                </div>
                <div className='flex items-center justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>ClassVII A</p>
                        </div>   
                    </div>
                    <div>
                        <TfiEmail 
                        color='#A098AE'
                        className='w-10 h-10 border rounded-full border-[#A098AE] p-2'/>
                        </div>
                </div>
                <div className='flex items-center justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>ClassVII A</p>
                        </div>   
                    </div>
                    <div>
                        <TfiEmail 
                        color='#A098AE'
                        className='w-10 h-10 border rounded-full border-[#A098AE] p-2'/>
                        </div>
                </div>
                <div className='flex items-center justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>ClassVII A</p>
                        </div>   
                    </div>
                    <div>
                        <TfiEmail 
                        color='#A098AE'
                        className='w-10 h-10 border rounded-full border-[#A098AE] p-2'/>
                        </div>
                </div>
                <div className='bg-[#edecf8] p-3 rounded-full flex justify-center border items-center'>
                    <button className='text-[#303972] font-medium cursor-pointer'>View More</button>
                </div>
                </div>
                {/* students  */}

                {/* messages  */}
               
                <div className='space-y-4'>
                <div className='flex justify-between items-center px-3 md:px-2 mt-6'>
                    <h1 className='text-xl font-semibold text-[#303972]'>Messages</h1>
                </div>
                <div className='flex justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>Lorem ipsum dolor sit.</p>
                        </div>   
                    </div>
                    <div>
                        <p className='text-xs font-normal text-[#A098AE]'>12:45 AM</p>
                        </div>
                </div>
                <div className='border'></div>
                <div className='flex justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>Lorem ipsum dolor sit.</p>
                        </div>   
                    </div>
                    <div>
                        <p className='text-xs font-normal text-[#A098AE]'>12:45 AM</p>
                        </div>
                </div>
                <div className='border'></div>
                <div className='flex justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>Lorem ipsum dolor sit.</p>
                        </div>   
                    </div>
                    <div>
                        <p className='text-xs font-normal text-[#A098AE]'>12:45 AM</p>
                        </div>
                </div>
                <div className='border'></div>
                <div className='flex justify-between px-2'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                        <div>
                            <h1 className='text-sm font-semibold text-[#303972]'>Abdur Rahman</h1>
                            <p className='text-xs font-normal text-[#A098AE]'>Lorem ipsum dolor sit.</p>
                        </div>   
                    </div>
                    <div>
                        <p className='text-xs font-normal text-[#A098AE]'>12:45 AM</p>
                        </div>
                </div>
                <div className='border'></div>
                <div className='bg-[#edecf8] p-3 rounded-full flex justify-center border items-center'>
                    <button className='text-[#303972] font-medium cursor-pointer'>View More</button>
                </div>
                </div>
                {/* messages  */}
            </div>
            <div className='space-y-4'>
                <div className='flex justify-between items-center px-3 md:px-2 mt-6'>
                    <h1 className='text-xl font-semibold text-[#303972]'>Current Foods Menu</h1>
                </div>
                <div className='space-y-4'>
                    <div className='bg-[#C1BBEB] rounded-lg h-36'></div>
                    <div>
                    <h1 className='text-[#363B64] font-semibold'>Beef Steak with Fried Potato</h1>
                    <p className='text-[#A098AE] text-xs'>Lorem ipsum dolor sit amet...</p>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='bg-[#C1BBEB] rounded-lg h-36'></div>
                    <div>
                    <h1 className='text-[#363B64] font-semibold'>Beef Steak with Fried Potato</h1>
                    <p className='text-[#A098AE] text-xs'>Lorem ipsum dolor sit amet...</p>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='bg-[#C1BBEB] rounded-lg h-36'></div>
                    <div>
                    <h1 className='text-[#363B64] font-semibold'>Beef Steak with Fried Potato</h1>
                    <p className='text-[#A098AE] text-xs'>Lorem ipsum dolor sit amet...</p>
                    </div>
                </div>
                <div className='bg-[#edecf8] p-3 rounded-full flex justify-center border items-center'>
                    <button className='text-[#303972] font-medium cursor-pointer'>View More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightBar