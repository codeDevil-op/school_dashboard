import Image from 'next/image'
import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import userProfile from '../../../../public/icons/Student.png'

const UserProfile = () => {
  return (
    <div className='flex justify-between max-md:justify-around items-center px-2'>
        <div className='relative'>
        <div className="h-2 w-2 rounded-full bg-[#4D44B5] absolute right-2"></div> 
        <IoIosNotificationsOutline size={20} color='#a098ae' className='w-10 h-10 rounded-full cursor-pointer bg-white shadow-sm p-1'
        style={{ stroke: 'black', strokeWidth: '5' }}
        />
        </div>
        <div>
        <IoSettingsOutline 
        className='w-10 h-10 rounded-full cursor-pointer bg-white shadow-sm p-1'
        size={22} color='#a098ae'
        style={{ stroke: '#a098ae', strokeWidth: '5' }}/>
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