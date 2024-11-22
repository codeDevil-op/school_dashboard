
import Image from 'next/image'
import React from 'react'
import notfication from '../../../../public/icons/notification.png'
import setting from '../../../../public/icons/setting.png'


const UserProfile = () => {
  return (
    <div className='flex justify-between max-md:justify-evenly items-center w-60'>
        <div className='relative flex justify-center items-center rounded-full p-2 bg-white w-11 h-11'>
        <div className="h-2 w-2 rounded-full bg-[#4D44B5] absolute right-2 top-[2px]"></div> 
        <Image src={notfication} alt=''/>
        </div>
        <div className='relative flex justify-center items-center rounded-full p-2 bg-white w-11 h-11'>
        <Image src={setting} alt=''/>
        </div>
        <div className='flex items-center space-x-3'>
            <div>
                <h1 className='text-sm font-semibold text-[#303972]'>Rahman</h1>
                <p className='text-xs font-normal text-[#A098AE]'>admin</p>
            </div>
            <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
        </div>

    </div>
  )
}

export default UserProfile